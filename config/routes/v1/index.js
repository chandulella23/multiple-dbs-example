const router = require('express').Router();
const Posts = require('./../../../app/controllers/posts');
const Users = require('./../../../app/controllers/users');
const Auth = require('./../../../config/is-authenticated');
const DataCon = require('./../../db-connection.js');

router.get('/getUsers',DataCon,Users.getUsers);
router.post('/login',DataCon,Users.login);
router.post('/updateImage',Auth,DataCon,Users.updateImage);
router.get('/getPosts',Auth,DataCon,Posts.getPosts);
router.get('/logout',Users.logout)
module.exports = router
