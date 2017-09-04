require('./REST/data/database.js');

var express = require('express');
var backend = express();

var path = require('path');

var bodyParser = require('body-parser');

var routes = require('./REST/routes');


backend.set('port', 4000);


// middleware for google chrome use
// Add headers
backend.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// Enable parsing of posted forms
backend.use(bodyParser.urlencoded({ extended: false }));
// Enable to post json data
backend.use(bodyParser.json());

backend.use('/REST', routes);

/*backend.get('/json', function(req, res) {
   res
    .status(200)
    .json([{"jsonData" : true}]);
});*/

// Create Server for Socket.IO
var socket_server = require('http').createServer(backend);
var io = require('socket.io').listen(socket_server);

var server = backend.listen(backend.get('port'), function(){
    var portNumber = server.address().port;
    console.log('Port Number', portNumber);
});