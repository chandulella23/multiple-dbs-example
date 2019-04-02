const router = require('express').Router();
const Users = require('./../../app/controllers/users');

module.exports = function(app){
    app.get('/',(req,res)=>{
        Users.createUserDb(req,res);
    })
 
    app.use('/api/v1',require('./v1'))
}