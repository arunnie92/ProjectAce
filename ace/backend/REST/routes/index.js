var express = require('express');
var router = express.Router();

var ctrlUser = require('../controllers/user.controller.js');
var ctrlMatches = require('../controllers/matches.controller.js');
var ctrlMessages = require('../controllers/messages.controller.js');

/* USER CONTROLLER */

// Create a User 
router
	.route('/users/register')
	.post(ctrlUser.createUser);

// Login  
// add bcrypt
router
	.route('/users/login/:email/:password')
	.get(ctrlUser.login);

// Get a user 
// Delete a user
router
	.route('/users/:userId')
	.get(ctrlUser.getUser)
	.delete(ctrlUser.deleteUser);

// Update Password
router
	.route('/users/password')
	.put(ctrlUser.updatePassword);

// Get Gender 
// Update Gender 
router
	.route('/users/:userId/gender')
	.get(ctrlUser.getGender)
	.put(ctrlUser.updateGender);

// Get seeking options 
// Update Seeking options 
router
	.route('/users/:userId/seeking')
	.get(ctrlUser.getSeeking)
	.put(ctrlUser.updateSeeking);

// get agePreference 
// update agePreference 
router
	.route('/users/:userId/agePreference')
	.get(ctrlUser.getAgePreference)
	.put(ctrlUser.updateAgePreference);

// get maxDistance 
// update maxDistance 
router
	.route('/users/:userId/maxDistance')
	.get(ctrlUser.getMaxDistance)
	.put(ctrlUser.updateMaxDistance);

// Get user coordinates //TESTED
// Update user coordinates 
router
	.route('/users/:userId/coordinates')
	.get(ctrlUser.getCoordinates)
	.put(ctrlUser.updateCoordinates);

// Get Users
router
	.route('/users')
	.get(ctrlUser.getUsersToMatch);

// Get User information 
// Update User information 
router
	.route('/users/:userId/information')
	.get(ctrlUser.getUserInformation)
	.put(ctrlUser.updateUserInformation);





/* MATCHES CONTROLLER */
// Grab user's matches
// Update a user's match
router
	.route('/users/:userId/matches')
	.get(ctrlMatches.getAllUserMatches)
	.post(ctrlMatches.addUserMatch);

// Delete a match (unmatch/block)





/* MESSAGES CONTROLLER */
// Get Messages for a specific match
router
	.route('/users/:userId/matches/:matchesId/messages')
	.get(ctrlMessages.getUserMatchesMessages);

// Create/send a message

module.exports = router;