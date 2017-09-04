var mongoose = require('mongoose');

// message schema for matches for users
/*var messagesSchema = new mongoose.Schema({
	sentOn : {
		type : Date,
		"default" : Date.now
	},
	message : String
});*/

// matches schema for users
var matchesSchema = new mongoose.Schema({
	matchId : String, // should store the _id of the user
	matchedOn : {
		type : Date,
		"default" : Date.now
	}/*,
	messages : {
		type : [messagesSchema],
		default : null
	}*/
});

// user schema
// add 'required' if need be later
var userSchema = new mongoose.Schema({
	email : {
        type : String,
        unique : true
    },
    password : {
        type : String
    },
    image: String,
    gender : {
    	type : String
    },
	seeking : {
		type : String
	},
	agePreference: {
		minAge : Number,
		maxAge: Number
	},
    maxDistance: {
    	type : Number // store as meters not miles
    },
	coordinates : {
		// Always store coordinates longitude (East/West)
		// THEN latitude (North/South) in that order.
		type : [Number],
		index : '2dsphere'
	},
	information : {
        firstName : String,
		middleName : String,
		lastName : String,
		age : { // integrate required at some point
			type : Number,
			min : 18,
			max : 100
		},
		zodiacSign : String,
		ethnicity : String,
		occupation : String,
		employer : String,
		degree : String,
		university : String,
		likes : [String],
		dislikes : [String],
		description : String
    },
    matches : {
		type : [matchesSchema],
	    default : null
	},
	joinedOn : {
		type : Date,
		"default" : Date.now
	},
});

mongoose.model('User', userSchema, 'users');