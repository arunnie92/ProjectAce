var mongoose = require('mongoose');
var databaseURL = 'mongodb://localhost:27017/ace'

mongoose.connect(databaseURL);

mongoose.connection.on('connected', function() {
	console.log('Mongoose has connected to', databaseURL);
});

mongoose.connection.on('disconnected', function() {
	console.log('Mongoose has disconnected');
});

mongoose.connection.on('error', function(error) {
	console.log('Mongoose connection error', error);
});

require('./users.model.js');