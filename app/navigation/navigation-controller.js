(function(){
    angular.module('timekill').controller('NavigationController', ['$scope', '$state', '$http', function($scope,
      $state, $http){
        $scope.logUserIn = function(){
            $http.post('api/user/login', $scope.login).success(function(response){
                localStorage.setItem('User-Datat', JSON.stringify(response));
            }).error(function(error){
                console.log(error);
            });
        }
    }])
}());