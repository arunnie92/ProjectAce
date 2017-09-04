ace.controller('LoginController',
  function ($scope, $state, $ionicPopup, UserFactory) {
    
  $scope.loginModel = {};
  
  $scope.login = function() {
    UserFactory.login($scope.loginModel.email, $scope.loginModel.password);
  };

	$scope.toRegister = function() {
		$state.go('register_part1');
	};

  $scope.forgotPassword = function() {
    $state.go('forgot_password');
  };

});