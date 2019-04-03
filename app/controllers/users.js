const axios = require('axios');
const mongoose = require('mongoose')
const Users = mongoose.model('users');
const Comments = mongoose.model('comments');
const Posts = mongoose.model('posts');
var jwtService = require('./v1/auth')

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
                    await newuser.save();
                }
                catch (err) {
                    throw err;
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
                try {
                    await require('../../config/db')('user' + user.id);
                    console.log("user", user.id);
                    await postsResponse.data.asyncForeach(async (post) => {
                        try {
                              if (user.id == post.userId) {
                                post.comments = obj[post.id]
                                let newpost = new Posts(post);
                                await newpost.save();
                            }
                        } catch (err) {
                            throw err;
                        }
                    })
                } catch (err) {
                    throw err;
                }
            })
            res.json({ success: true })
        } catch (err) {
            res.json({ success: false, meassage: err.code })
        }
    },

    login: async (req, res) => {
        try {
            let data = req.body;
            const user = await Users.find({ email: data.email, password: data.password });
            if (user.length) {
                console.log(data.password, user);
                return res.json({
                    success: "success",
                    token: jwtService.createToken(user[0]),
                    user: user[0]
                });
            } else {
                return res.json({ success: false , error:'Auth failed'});
            }
        } catch (error) {
            return res.json({ success: false, error:'Auth failed'})
        }
    },

    getUsers: async (req, res) => {
        try {
            console.log(req.user)
            let users = await Users.find({});
            return res.json({ success: true, users: users })
        } catch (error) {
            return res.json({ success: false })
        }
    },

    updateImage: async (req, res) => {
        try {
            let user = await Users.findById(req.user._id);
            user.userImage = req.body.userImage;
            await user.save();
            return res.json({ success: true })
        } catch (error) {
            return res.json({ success: false })
        }
    },

    logout :(req,res)=>{
        return res.json({success:true,token:null})
    }
}