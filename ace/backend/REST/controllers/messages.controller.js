var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.getUserMatchesMessages = function(req, res) {
	var userId = req.params.userId;
	var matchId = req.params.matchId;
};

// Create a message