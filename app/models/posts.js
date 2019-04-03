const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {

        id: {
            type: Number,
        },
        userId: {
            type: Number,
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
            type: Object,
            ref: 'comments'
        }]
    },
    {
        timestamps: true,
        autoIndex: true
    }
);
module.exports = mongoose.model('posts',postSchema)