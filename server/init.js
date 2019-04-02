const express = require('express');
let bodyparser = require('body-parser');
let cors = require('cors');
var app = express();
app.use(bodyparser());
app.use(cors());
module.exports = app;
let url_variable = 'master';
require('./../config/db')(url_variable)
require('./../app/models/users')
require('./../app/models/posts')
require('./../app/models/comments')
require('./../config/routes')(app)
