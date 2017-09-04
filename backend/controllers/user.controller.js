var mongoose = require('mongoose');
var user = mongoose.model('User');

module.exports.getAllUsers = function(req, res) {
	var userId = reqq.params.userId

	user
		.findById(userId)
		.exec(function(err, doc) {
			res 
				.status(200)
				.json(doc);
		});
};