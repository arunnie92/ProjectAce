require('./data/database.js');
var express = require('express');
var ace = express();
var path = require('path');
var routes = require('./routes');

// Define the port to run on
ace.set('port', 3003);



ace.use('/routes');