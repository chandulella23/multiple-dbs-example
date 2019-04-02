const app = require('./server/init');
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port,(err)=>{
    if(!err)
    console.log("server started on port :", port)
});

