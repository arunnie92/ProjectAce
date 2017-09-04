var mongoose = require('mongoose');

var matchesSchema = new mongoose.Schema({
	match : {
		type : String
	},
	createdOn : {
		type : Date,
		"default" : Date.now
	}
});

var userSchema = new mongoose.Schema({
	email : {
		type : String,
		unqiue : true,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	gender : {
		type : String,
		required : true
	},
	seeking : {
		type : String,
		required : true
	},
	name : {
		type : [String],
		required : true
	},
	age : {
		type : Number,
		min : 0,
		max : 100,
		"default": 18,
		required : true,
	},
	astrological_sign : {
		type : String,
		required : true
	},
	background : {
		type : String
	},
	occupation : {
		type : String
	},
	employer : {
		type : String
	},
	university : {
		type : String,
	},
	major : {
		type : String
	},
	year_of_graduation : {
		type : Number,
		min : 1900,
		max : 2021
	}, 
	likes : {
		type : [String]
	},
	dislikes : {
		type : [String]
	},
	description : {
		type : [String]
	},
	location : {
		coordinates : {
			type : [Number],
			index : '2dsphere'
		}
	},
	matches : [matchesSchema]
});

mongoose.model('User', userSchema, 'users');