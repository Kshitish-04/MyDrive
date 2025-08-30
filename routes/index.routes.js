const express = require('express')
const rout = express.Router()
const upload = require('../config/multer.config')
const fileModel = require('../models/files.models')
const authMiddleware = require('../middlewares/authe')
const firebase = require('../config/firebase.config')

// Root route - redirect to login if not authenticated, otherwise to home
rout.get('/', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/user/login');
    }
    // If token exists, redirect to home (let home route handle token validation)
    res.redirect('/home');
});

// Logout route
rout.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/user/login');
});

rout.get('/home',authMiddleware,async(req,res)=>{

    const userFiles = await fileModel.find({
        user: req.user.userId
    })
    console.log(userFiles)

    res.render('home',{
        files: userFiles
    })
})

rout.post('/upload',authMiddleware, (req, res, next) => {
    upload.single('file')(req, res, (err) => {
        if (err) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({
                    message: 'File size too large. Maximum allowed size is 2MB.',
                    error: 'FILE_TOO_LARGE'
                });
            }
            return res.status(400).json({
                message: 'File upload error',
                error: err.message
            });
        }
        next();
    });
}, async(req,res)=>{
    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'No file uploaded',
                error: 'NO_FILE'
            });
        }

        const newFile = await fileModel.create({
            path: req.file.path,
            originalname: req.file.originalname,
            user: req.user.userId
        })
        res.json(newFile)
    } catch (error) {
        console.error('Error creating file record:', error);
        res.status(500).json({
            message: 'Error saving file information',
            error: error.message
        });
    }
})

rout.get('/download/:path',authMiddleware,async(req,res)=>{
    const loggedInUserId = req.user.userId
    const path = req.params.path

    const file = await fileModel.findOne({
        user: loggedInUserId,
        path: path
    })

    if(!file){
        return res.status(401).json({message: 'Unauthorized'})
    }
    const signedUrl = await firebase.storage().bucket().file(path).getSignedUrl({
        action: 'read',
        expires: Date.now() + 60 * 1000 //1 minutes
    })

    res.redirect(signedUrl[0])
        

})

rout.delete('/delete/:path',authMiddleware,async(req,res)=>{
    const loggedInUserId = req.user.userId
    const path = req.params.path

    try {
        // Find the file in database
        const file = await fileModel.findOne({
            user: loggedInUserId,
            path: path
        })

        if(!file){
            return res.status(401).json({message: 'Unauthorized'})
        }

        // Delete file from Firebase Storage
        await firebase.storage().bucket().file(path).delete()

        // Delete file record from database
        await fileModel.deleteOne({
            user: loggedInUserId,
            path: path
        })

        res.json({message: 'File deleted successfully'})
    } catch (error) {
        console.error('Error deleting file:', error)
        console.error("Delete error:", error);
        res.status(500).json({message: 'Error deleting file'})
    }
})



module.exports = rout