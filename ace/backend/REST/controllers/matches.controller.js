var mongoose = require('mongoose');
var User = mongoose.model('User');

// Get all matches for a User
// edit to not grab unmatches
module.exports.getAllUserMatches = function(req, res) {
	var userId = req.params.userId;
	var user = {};
	User
		.findById(userId)
		.exec(function(error, doc) {
			if (error) {
				res
					.status(500)
					.json(doc);
			} else {
					res
						.status(200)
						.json(doc);
					
			}
		});
};

module.exports.addUserMatch = function(req, res) {
	var userId = req.params.userId;

	User
		.findById(userId)
		.select("matches")
		.exec(function(error, user) {
			var match;
			if (error) {
				res
					.status(500)
					.json(error);
			} else if (!user) {
				res
					.status(404)
					.json({
						"message" : "User Id was not found" + userId
					});
			} else {
				user.matches.push({
					matchId : req.body.matchId
				});
				user.save(function(error, updatedUser) {
					if (err) {
						res
							.status(500)
							.json(error);
					} else {
						res
							.status(200)
							.json(updatedUser.matches[updatedUser.matches.length -1])
					}
				});
			}
		})
};
