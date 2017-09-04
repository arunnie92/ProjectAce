ace.controller('ForgotPasswordController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$scope.passwordModel = {};

	$scope.updatePassword = function() {
		$http({
			method: 'PUT',
			url: 'http://localhost:4000/REST/users/password',
			data: $scope.passwordModel,
			headers: {
                'Content-Type': 'application/json; charset=utf-8'
            	}
			}).then(function (response) {
				console.log('done');
         	}, function (reason) {
            	console.log(reason);
		});
	};
}]);