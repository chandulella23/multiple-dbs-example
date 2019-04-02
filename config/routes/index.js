const router = require('express').Router();
const SetUsers = require('./../../app/controllers/setusers');

module.exports = function(app){
    app.get('/',(req,res)=>{
        SetUsers.createUserDb(req,res);
    })
 
    app.use('/api/v1',require('./v1'))
}