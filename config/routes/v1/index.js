const router = require('express').Router();
const Posts = require('./../../../app/controllers/posts');
const Users = require('./../../../app/controllers/users');

router.get('/getUsers',Users.getUsers);
router.post('/login',Users.login);
module.exports = router
