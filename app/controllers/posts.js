var mongoose = require('mongoose');
const Posts =  mongoose.model('posts');

module.exports = {
    getPosts: async(req, res)=>{
        try {
            let posts = await Posts.find({});
            return res.json({success:true, posts:posts});
        } catch(err) {
            return res.json({success:false})
        }
    }
};