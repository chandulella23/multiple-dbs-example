const axios = require('axios');
const mongoose = require('mongoose')
const Users = mongoose.model('users');
const Comments = mongoose.model('comments');
const Posts = mongoose.model('posts');

module.exports = {
    createUserDb: async (req, res) => {
        try {
            let users_url = `https://jsonplaceholder.typicode.com/users`;
            let posts_url = `https://jsonplaceholder.typicode.com/posts`;
            let comments_url = `https://jsonplaceholder.typicode.com/comments`;
            let userDataResponse = await axios.get(users_url);
            let postsResponse = await axios.get(posts_url);
            let commentsResponse = await axios.get(comments_url);
            Array.prototype.asyncForeach = async function asyncForEach(callback) {
                if (Object.prototype.toString.call(this) !== '[object Array]') {
                    throw new Error('Variable should be type of Array Only');
                }
                for (let index = 0; index < this.length; index++) {
                    await callback(this[index], index, this);
                }
            }
            await userDataResponse.data.asyncForeach(async (user) => {
                try {
                    let newuser = new Users(user);
                    newuser._id = 'user' + user.id;
                    newuser.id = user.id;
                    await newuser.save();
                }
                catch (err) {
                    console.log(err)
                }
            })
            let obj = {}
            commentsResponse.data.map((cmnt) => {
                if (!obj[cmnt.postId]) {
                    obj[cmnt.postId] = []
                    obj[cmnt.postId].push(cmnt)
                } else {
                    obj[cmnt.postId].push(cmnt)
                }
            })

            await userDataResponse.data.asyncForeach(async (user) => {
                await require('./../../config/db')('user' + user.id);
                console.log("user", user.id);
                await postsResponse.data.asyncForeach(async (post) => {
                    if (user.id == post.userId) {
                        post.comments = obj[post.id]
                        let newpost = new Posts(post);
                        await newpost.save();
                    }
                })
            })

            res.json({ success: true })
        } catch (err) {
            res.json({ success: false, meassage: err.code })
        }
    }
}