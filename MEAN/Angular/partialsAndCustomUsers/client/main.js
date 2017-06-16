var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
      $routeProvider
        .when('/users',{
            templateUrl: 'partials/customizeUsers.html',
        })
        .when('/list',{
            templateUrl: 'partials/userList.html'
        })
        .otherwise({
          redirectTo: '/'
    });
});

app.factory('userFactory', function(){
    var factory = {};
    factory.users = [];
    factory.index = function(callback){
        callback(factory.users);
    }
    factory.createUser = function(user, callback){
        factory.users.push(user);
        callback(factory.users);
    }
    factory.deleteUser = function(i, callback){
        factory.users.splice(i,1);
        callback(factory.users);
    }
    return factory;
});

app.controller('CustomizeUsersController', ['$scope', 'userFactory', function($scope, userFactory){
    function getUsers(data){
        $scope.users = data;
        $scope.user = {};
    }
    $scope.users = [];
    $scope.user = {};

    $scope.index = function(){
        userFactory.index(getUsers);
    }
    $scope.createUser = function(){
        userFactory.createUser($scope.user, getUsers);
    }
    $scope.deleteUser = function(i){
        userFactory.deleteUser(i, getUsers);
    }
}]);

app.controller('UserListsController', ['$scope', 'userFactory', function($scope, userFactory){
    function getUsers(data){
        $scope.users = data;
    }
    $scope.users = [];

    userFactory.index(getUsers);
}])