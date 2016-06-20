var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var AuthenticationController = require('./server/controllers/authentication-controller');

mongoose.connect('mongodb://localhost:27017/timekill');

app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use(bodyParser.json());

app.listen('8888', function(){
   console.log('Listening for 8888'); 
});

app.get('/', function(req,res){
   res.sendFile(__dirname + '/index.html'); 
});

//Authentication
app.post('/api/user/signup', AuthenticationController.signup);
app.post('/api/user/login', AuthenticationController.login);