const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        _id: {
            type: Number,
            unique: true
        },
        id: {
            type: Number,
            unique: true
        },
        postId: {
            type: Number,
            unique: true
        },
        name: {
            type: String,
            trim: true,
            default: ''
        },
        email: {
            type: String,
            trim: true,
            default: ''
        },
        body: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        autoIndex: true
    }
);
module.exports = mongoose.model('comments',commentSchema)