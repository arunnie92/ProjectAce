var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/ace';

mongoose.connect(dburl);

mongoose.connection.on('Connected', function(){
	console.log('Mongoose has successsfully connected to ' + dburl);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose has been disconnected');
});

mongoose.connection.on('error', function(err){
	console.log('mMongoose connection error: ' + err);
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGINT)');
        // process can finish and exit
        process.exit(0);
    });
});

process.on('SIGTERM', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGTERM)');
        // process can finish and exit
        process.exit(0);
    });
});

process.once('SIGUSR2', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGUSR2)');
        // process can finish and exit
        process.kill(process.pid, 'SIGUSR2');
    });
});

require('./user.model.js');