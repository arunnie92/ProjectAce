var express = require('express');
var router = express.Router();

var ctrlUser = require('../controllers/user.controller.js')

router
	.route('/users')
	.get(ctrlUser.getAllUsers);

// GET one user's information
router
	.route('/users/:userId')
	.get(ctrlUser.userInfo);

module.exports = router;