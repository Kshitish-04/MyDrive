const mongoose = require('mongoose');
const user = require('./user.model');

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: [true,'File path is required']
    },
    originalname: {
        type: String,
        required: [true,'File name is required']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true,'File must belong to a user']

    }
})

const file = mongoose.model('file',fileSchema)

module.exports = file;