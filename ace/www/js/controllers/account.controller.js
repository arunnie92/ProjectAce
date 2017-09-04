ace.controller('AccountController', 
  function ($rootScope, $scope, $http, $state, UserFactory) {

	$scope.locationForm = {};
	$scope.distanceForm = {};
	$scope.seekingForm = {};
	$scope.genderForm = {};
	$scope.logoutForm = {};
	$scope.deleteAccountForm = {};
  
  
  $scope.user = UserFactory.getUserInfo();
  console.log($scope.user);

	$scope.updateSeeking = function() {
		console.log('clicked on');
		/*$http({
            method: 'PUT',
            url: 'http://localhost:4000/REST/users/' +
              $rootScope.user._id + '/seeking',
            data: data,
            header: {
              'Content-Type': 'application/json; charset=utf-8'
            }
            }).then(function(response) {
                console.log('it works');
            }, function (reason) {
              	console.log('it doesnt work');
            });*/
	};

    
});