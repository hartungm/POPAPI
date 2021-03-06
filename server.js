var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://rootuser:NndC4]j$X[$)Pe*#@ds019990.mlab.com:19990/popapi');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.use('/api', require('./app/routes/api'));

app.listen(port);
console.log("App running on port 80");

