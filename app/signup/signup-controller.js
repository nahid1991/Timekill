(function(){
    angular.module('timekill').controller('SignupController', ['$scope', '$http', '$state', function($scope, $http, $state){
        $scope.createUser = function(){
            console.log($scope.newUser);
            $http.post('api/user/signup', $scope.newUser).success(function(response){
                
            }).error(function(error){
                console.log(error);
            })
        }
    }]);
}());