const jwt = require('jsonwebtoken');
const secret = 'chandu@sai' //make sure you place your secret key in .env file
module.exports = (req, res, next) => {
    try {
        console.log(req.headers,req)
        const decoded = jwt.verify(req.headers.authorization,secret);
        req.user = decoded;
        next();
    } catch(err) {
        res.json({success:false,error:'No access'})
    }
    
}