const jwt = require('jsonwebtoken');
const secret = 'chandu@sai'; //make sure you place your secret key in .env file
module.exports ={
    createToken : (user)=>{
        let today = new Date();
        let exp = new Date(today);
        exp.setDate(today.getDate()+60);
    
        return jwt.sign({
            _id: user._id,
            email: user.email,
            exp: parseInt(exp.getTime() / 1000),
        }, secret);
    }
}