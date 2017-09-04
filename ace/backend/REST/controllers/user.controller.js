var mongoose = require('mongoose');
var shuffle = require('shuffle-array');
var User = mongoose.model('User');

module.exports.createUser = function(req, res) {
    User
        .create({
            email : req.body.email,
            password : req.body.password,
        }, function(error, user) {
            if (error) {
                console.log('Error creating User');
                res
                    .status(400)
                    .json(error);
            } else {
                console.log('User Sucessfully Added');
                res
                    .status(201)
                    .json(user._id);
            }
        });
};

// add hash password/bcrypt
module.exports.login = function(req, res) {
    var email = req.params.email;
    var password = req.params.password;

    User
        .findOne({
            email: email,
            password: password
        }) 
        .exec(function(error, user) {
            if(error){
                    res
                        .status(404)
                        .json(error);
                } else if (!user) {
                    res
                        .status(500)
                        .json({
                            "message" : "could not find user"
                        });
                } else {
                    console.log(user);
                    res
                        .status(200)
                        .json(user);
                }
        });
};

module.exports.getUser = function(req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .exec(function(error, user) {
            if (error) {
                console.log("Error geting user");
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                console.log("User id does not exist", userId);
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found" + userId
                    });
            } else {
                console.log("Found user");
                res
                    .status(200)
                    .json(user);
            }
        });
};

module.exports.deleteUser = function(req, res) {
    var userId = req.params.userId;

    User
        .findByIdAndRemove(userId)
        .exec(function(error, deletedUser) {
            if (error) {
                console.log("error getting user");
                res
                    .status(500)
                    .json(error);
            } else if (!deletedUser) {
                console.log("invalid user id:", userId);
                res
                    .status(404)
                    .json(deletedUser);
            } else {
                console.log("User has been deleted:", userId);
                res
                    .status(204)
                    .json();
            }
        });
};

module.exports.updatePassword = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var id = null;

    User
        .findOneAndUpdate({
            email: email
        })
        .select("password")
        .exec(function(error, user) {
            if(error){
                console.log(error);
                res
                    .status(404)
                    .json(error);
            } else if (!user) {
                res
                    .status(500)
                    .json({
                        "message" : "could not find users"
                    });
            } else {
                user.password = req.body.password;
                user.save(function(error, updatedUser) {
                    if (error) {
                        res
                            .status(500)
                            .json(error);
                    } else {
                        res
                            .status(204)
                            .json();
                    }
                });
            }
        });
};

module.exports.getGender = function (req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("gender")
        .exec(function(error, user) {
            if (error) {
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else  {
                res
                    .status(200)
                    .json(user);
            }
        });
};

module.exports.updateGender = function(req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("gender")
        .exec(function(error, user) {
            if (error) {
                console.log("Error getting user information for gender");
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                console.log("user Id doesn't exist");
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else {
                user.gender = req.body.gender;
                user.save(function(error, updatedUser) {
                    if (error) {
                        res
                            .status(500)
                            .json(error);
                    } else {
                        res
                            .status(204)
                            .json();
                    }
                });
            }
        });
};

module.exports.getSeeking = function(req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("seeking")
        .exec(function(error, user) {
            if (error) {
                res
                    .status(500)
                    .json(error)
            } else if (!user) {
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else {
                res
                    .status(200)
                    .json(user);
            }
        })
};

module.exports.updateSeeking = function(req, res) {
    var userId = req.params.userId;


    User
        .findById(userId)
        .select("seeking")
        .exec(function(error, user) {
            if (error) {
                console.log("Error getting user information for seeking");
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                console.log("user Id doesn't exist");
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else {
                user.seeking = req.body.seeking;
                user.save(function(error, updatedUser) {
                    if (error) {
                        res
                            .status(500)
                            .json(error);
                    } else {
                        res
                            .status(204)
                            .json();
                    }
                });
            }
        });
};

module.exports.getAgePreference = function(req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("agePreference")
        .exec(function(error, user) {
            if (error) {
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else {
                res
                    .status(200)
                    .json(user);
            }
        });
};

module.exports.updateAgePreference = function (req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("agePreference")
        .exec(function(error, user) {
            if (error) {
                conosle.log("Error getting user information");
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                console.log("user Id doesn't exist");
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else {
                user.agePreference = {
                    minAge : parseInt(req.body.minAge, 10),
                    maxAge : parseInt(req.body.maxAge, 10)
                };
                user.save(function(error, updatedUser) {
                    if (error) {
                        res
                            .status(500)
                            .json(error);
                    } else {
                        res
                            .status(204)
                            .json();
                    }
                });
            }
        });
};

module.exports.getMaxDistance = function (req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("maxDistance")
        .exec(function (error, user) {
            if (error) {
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else {
                res
                    .status(200)
                    .json(user);
            }
        });
};

module.exports.updateMaxDistance = function (req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("maxDistance")
        .exec(function(error, user) {
            if (error) {
                conosle.log("Error getting user information");
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                console.log("user Id doesn't exist");
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else {
                user.maxDistance = (parseInt(req.body.maxDistance, 10)*1609.344);
                
                user.save(function(error, updatedUser) {
                    if (error) {
                        res
                            .status(500)
                            .json(error);
                    } else {
                        res
                            .status(204)
                            .json();
                    }
                });
            }
        });    
};

module.exports.getCoordinates = function (req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("coordinates")
        .exec(function (error, user) {
            if (error) {
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else {
                res
                    .status(200)
                    .json(user);
            }
        });
};

module.exports.updateCoordinates = function(req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .exec(function(error, user) {
            if (error) {
                console.log('error');
                res
                    .status(404)
                    .json(error);
            } else if (!user) {
                console.log("could not user with that id");
                res
                    .status(500)
                    .json({
                        "message" : "could not find user"
                    });
            } else {
                user.coordinates = [
                    parseFloat(req.body.lng),
                    parseFloat(req.body.lat)
                ]
                user.save(function(error, updatedUser) {
                    if (error) {
                        res
                            .status(500)
                            .json(error);
                    } else {

                        res
                            .status(204)
                            .json();
                    }
                });
                console.log('IT WORKS');
            }
        })
};

// NEEDS TO BE FULLY TESTED WITH USER DATA
// add age preference
module.exports.getUsersToMatch = function(req, res) {
    console.log('to geo query');
    var lng = parseFloat(req.query.lng);
    var lat = parseFloat(req.query.lat);
    var maxDistance = parseInt(req.query.maxDistance, 10); // Convert to meters
    console.log(lng);
    console.log(lat);

    if (isNaN(lng) || isNaN(lat)) {
        res
            .status(400)
            .json({
            "error message" : "If supplied in querystring, lng, lat, & distance must both be numbers"
        });
        return;
    }

    // A geoJSON point
    var point = {
        type : "Point",
        coordinates : [lng, lat]
    };

    // options for query
    var options = {
        spherical : true,
        maxDistance : maxDistance,
        num : 4,
        query : {
            gender : "female"
        }
    };

    User
        .geoNear(point, options, function(err, users, stats) {
            console.log('Geo Results', users);
            console.log('Geo stats', stats);
            if (err) {
                console.log("Error finding Users");
                res
                    .status(500)
                    .json(err);
            } else {
                shuffle(users);
                res
                    .status(200)
                    .json(users);
            }
        });
        return;
    //}

    // Gets ALL Users
    /*User
        .find()
        .exec(function(error, users) {
        if (error) {
            res
                .status(500)
                .json(error);
        } else {
            console.log('got');
            res
                
                .status(200)
                .json(users);
        }
    });*/
};

module.exports.getUserInformation = function(req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("information")
        .exec(function(error, user) {
            if (error) {
                console.log("Error getting user");
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                console.log("User id does not exist", userId);
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found" + userId
                    });
            } else {
                res
                    .status(200)
                    .json(user);
            }
        });
};

module.exports.updateUserInformation = function(req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .select("information")
        .exec(function(error, user) {
            if (error) {
                conosle.log("Error getting user information");
                res
                    .status(500)
                    .json(error);
            } else if (!user) {
                console.log("user Id doesn't exist");
                res
                    .status(404)
                    .json({
                        "message" : "User Id was not found"
                    });
            } else {
                user.information = {
                    firstName : req.body.firstName,
                    middleName : req.body.middleName,
                    lastName : req.body.lastName,
                    age : parseInt(req.body.age, 10),
                    zodiacSign : req.body.zodiacSign,
                    ethnicity : req.body.ethnicity,
                    occupation : req.body.occupation,
                    employer : req.body.employer,
                    degreee : req.body.degree,
                    university: req.body.university,
                    likes : req.body.likes,
                    dislikes : req.body.dislikes,
                    description : req.body.description
                };
                user.save(function(error, updatedUser) {
                    if (error) {
                        res
                            .status(500)
                            .json(error);
                    } else {
                        console.log('info has been updated');
                        res
                            .status(204)
                            .json();
                    }
                });
            }
        });
};