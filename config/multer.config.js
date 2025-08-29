const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../mydrive-4c4c8-firebase-adminsdk-fbsvc-0f386f1e86.json');
const { credential } = require('firebase-admin');

const storage = firebaseStorage({
    credentials:  firebase.credential.cert(serviceAccount),
    bucketName: 'mydrive-4c4c8.firebasestorage.app',
    unique: true
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
})

module.exports = upload;