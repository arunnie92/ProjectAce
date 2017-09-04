ace.controller('Main_Controller', ['$rootScope','$scope', '$http', function ($rootScope, $scope, $http) {
    
	function shuffle (arr) {
		var i = 0;
		var j = 0;
		var temp = null;

		for (i = arr.length-1; i > 0; i -= 1) {
			j = Math.floor(Math.random() * (i+1));
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	};

	$scope.users; 
	/* 
		make a function in UserFactory
		get request for all users in the area that match seeking and distance
		returns a different 4 for every request
	*/
	$scope.userMatch = [];

	$scope.matchStepOne = function (user) {
		// store first user choice
		$scope.userMatch.push(user.obj._id);
		console.log($scope.userMatch[0]);
		console.log($scope.users);

		// shuffle the users array
		$scope.users = shuffle($scope.users);
		console.log($scope.users);
	};

	$scope.matchStepTwo = function(user) {
		// store second user choice
		$scope.userMatch.push(user.obj._id);
		console.log($scope.userMatch);

		var data = {
			"matchId" : $scope.userMatch[0]
		};

		// check if both the matches are equal
		if ($scope.userMatch[0] === $scope.userMatch[1]) {
			// post match id to database of both users to confirm its match
			$http({
				method: 'POST',
				url: 'http://localhost:4000/REST/users/' + $rootScope.user._id + '/matches',
				data : data,
				headers: {
                'Content-Type': 'application/json; charset=utf-8'
            	}
			}).then(function (response) {
            	console.log('user matchId posted');
         	}, function (reason) {
            	console.log(reason.data);
          	});
          	alert("YOU HAVE A NEW MATCH!");
		} else {
			// get request for new set of users
		}
	};

}]);