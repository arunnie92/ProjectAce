ace.controller('RegisterController', 
	function ($rootScope, $scope, $http, $state, $ionicPopup, UserFactory) {
	
	$scope.registerModel = {};
	$scope.genderModel = {};
	$scope.seekingModel = {};
	$scope.informationModel = {};
	$scope.id;

	$scope.register = function() {
		UserFactory.register_partOne($scope.registerModel);
	};

	$scope.updateGenderAndSeeking = function() {
		UserFactory.register_partTwo($scope.geenderModel, $scope.seekingModel);
	};


	$scope.updateInformationAndLocation = function() {
		UserFactory.register_partThree($scope.informationModel);
	};
	

});