const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {

        id: {
            type: Number,
            unique: true
        },
        userId: {
            type: Number,
            unique: true
        },
        title: {
            type: String,
            trim: true,
            default: ''
        },
        body: {
            type: String,
            trim: true,
        },
        comments: [{
            type: Number,
            ref: 'comments'
        }]
    },
    {
        timestamps: true,
        autoIndex: true
    }
);
module.exports = mongoose.model('posts',postSchema)