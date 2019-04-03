module.exports = async (req, res, next) => {
    try {
        if(req.user && req.user._id) {
            await require('./../config/db')(req.user._id);
        } else {
            await require('./../config/db')('master');
        }
        
        next();
    } catch(err) {
        res.json({success:false,error:'Database Connection failed'})
    }
    
}