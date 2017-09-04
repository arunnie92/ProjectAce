ace.factory('UserFactory', function($http, $state, $cordovaGeolocation, $ionicPopup) {

    
    var user = {};

    user.login = function(email, password) {
        // find based on email and retrun user
        $http({
            method: 'GET',
            url: 'http://localhost:4000/REST/users/login/' + email + '/' + password,
            header: {
                'Content-Type': 'application/json; charset=utf-8'
            }
         }).then(function(response) {
             id = response.data._id;
            console.log(response.data);
        }, function (reason) {
            console.log(reason);
        });

        // update coordinates 
        $cordovaGeolocation
        .getCurrentPosition({enableHighAccuracy: false})
        .then(function (position) {
          var lng = position.coords.longitude
          var lat = position.coords.latitude
          var data = {
            lng: lng,
            lat, lat
          };
          console.log(data);
          $http({
            method: 'PUT',
            url: 'http://localhost:4000/REST/users/' + id + '/coordinates',
            data: data,
            header: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          }).then(function(response) {
                // switch states to main controller
                $state.go('tabs.main');
            }, function (reason) {
              console.log(reason.data);
            });

        }, function(error) {
          console.log('error');
          console.log(error);
        });
    };

    user.getUserInfo = function() {
        var data = null;
        $http({
            method: 'GET',
            url: 'http://localhost:4000/REST/users/' + id,
            header: {
                'Content-Type': 'application/json; charset=utf-8'
            }
         }).then(function(response) {
            //console.log(response.data.information);
            data = response.data.information;
        }, function (reason) {
           // console.log(reason);
        });
        console.log(data);
        return data;
    };

    // work on 
    user.getMatches = function() {
        var matches = null;
        $http({
            method: 'GET',
            url: 'http://localhost:4000/REST/users/' + id + '/matches',
            header: {
                'Content-Type': 'application/json; charset=utf-8'
            }
         }).then(function(response) {
             matches = response.data;
            console.log(response.data);
        }, function (reason) {
            console.log(reason);
        });
    };

    user.register_partOne = function(data) {
		$http({
				method: 'POST',
				url: 'http://localhost:4000/REST/users/register',
				data : data,
				headers: {
                'Content-Type': 'application/json; charset=utf-8'
            	}
			}).then(function (response) {
				id = response.data;
            	$state.go('register_part2');
            	
         	}, function (reason) {
            	$ionicPopup.alert({
              		title: 'Register Error',
              		content: 'This email aready exists. Please Login.'
            	}).then(function(res) {
              		$state.go('login');
            	});
          	});
    };

    user.register_partTwo = function(genderData, seekingData) {
        $http({
			method: 'PUT',
			url: 'http://localhost:4000/REST/users/' + id + '/gender',
			data: genderData,
			headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
			}).then(function (response) {
				//console.log(response);
                $http({
                    method: 'PUT',
                    url: 'http://localhost:4000/REST/users/' + id + '/seeking',
                    data: seekingData,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                        }
                    }).then(function (response) {
                        console.log(response);
                        $state.go('register_part3');
                    }, function (reason) {
                        console.log(reason);
                });
         	}, function (reason) {
            	console.log(reason);
		});
    };

    user.register_partThree = function(informationData) {
		$http({
			method: 'PUT',
			url: 'http://localhost:4000/REST/users/' + id + '/information',
			data: informationData,
			headers: {
                'Content-Type': 'application/json; charset=utf-8'
            	}
		}).then(function (response) {
			console.log(response);
            // update location
            $cordovaGeolocation
                .getCurrentPosition({enableHighAccuracy: false})
                .then(function (position) {
                    var lng = position.coords.longitude
                    var lat = position.coords.latitude
                    var data = {
                        lng: lng,
                        lat, lat
                    };
                console.log(data);
                
                $http({
                    method: 'PUT',
                    url: 'http://localhost:4000/REST/users/' + id + '/coordinates',
                    data: data,
                    header: {
                    'Content-Type': 'application/json; charset=utf-8'
                    }
                }).then(function(response) {
                    console.log('user has been created');
                    $state.go('login');
                }, function (reason) {
                    console.log(reason.data);
                });
                
                }, function(error) {
                    console.log('error');
                    console.log(error);
                });

		}, function (reason) {
			console.log(reason);
		});

    }


    return user;
});
