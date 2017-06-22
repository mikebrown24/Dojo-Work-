var app = angular.module("myApp", ['ngRoute', 'ngCookies','ngMessages']);

app.factory('userFactory', function ($http) {
    var factory = {};
    factory.users = [];
    factory.index = function (callback) {
        $http.get("/api").then(function (response) {
            factory.users = response.data.users;
            callback(factory.users);
        });
    };
    factory.register = function (user, callback) {
        $http.post("/api/register", user).then(function (response) {
            factory.users = response.users;
            factory.index(callback);
        });
    };
    factory.login = function (user,callback) {
        $http.post('/api/login', user).then(function(response) {
            factory.users = response.users;
            factory.index(callback);
        });
    }
        return factory;
});

app.controller('UsersController', function ($scope, userFactory) {
    function getUsers(data) {
        $scope.users = data;
        $scope.user = {};
    }
    $scope.users = [];
    $scope.user = {};

    $scope.index = function () {
        userFactory.index(getUsers);
    }
    $scope.index();

    $scope.register = function () {
        userFactory.register($scope.user, getUsers);
    }
    $scope.login = function () {
        userFactory.login($scope.user, getUsers);
    }
});

app.config(function($routeProvider){
    $routeProvider
        .when("/login", {
            templateUrl: "login.html",
            controller: "UsersController"
        })
        .when("/register", {
            templateUrl: "register.html",
            controller: "UsersController"
        })
        .otherwise({ redirectTo: "/" });
});