const mongoose = require('mongoose')

module.exports =  async(url_variable)=> {
    await mongoose.connect(`mongodb://localhost:27017/${url_variable}`, {
        useNewUrlParser: true
    },
        (err, db) => {
            if (!err) {
                console.log('Database connected successfully',url_variable);
            } else {
                console.log('mongoose connection failed')
            }
        });
    mongoose.set('debug', true);
}
