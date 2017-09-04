ace.controller('MatchesController', ['$rootScope','$scope', '$http', function ($rootScope, $scope, $http) {
   $scope.matches = $rootScope.user.matches;
   $scope.items;
   $http({
      method: 'GET',
      url: 'js/data.json',
      header: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function(response) {
        $scope.items = response.data;
        console.log($scope.items);
    }, function (reason) {
        console.log(reason);
    });

}]);