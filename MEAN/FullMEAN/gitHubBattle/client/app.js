var app = angular.module("myApp", ['ngRoute']);
app.factory('userFactory', function ($http) {
    var factory = {};
    factory.users = [];
    factory.index = function (callback) {
        $http.get("/api").then(function (response) {
            factory.users = response.data.users;
            callback(factory.users);
        });
    };

    factory.createUser = function (username, callback) {
        console.log("username", username);
        var api = "https://api.github.com/users/" + username;
        $http.get(api).then(function (response) {
            console.log("api", api);
            var score = 0;
            score = score + response.data.followers;
            console.log("username", username);
            console.log("score followers", score);
            score = score + response.data.public_repos;
            console.log("score repos", score);
            score = score * 12;
            console.log("score total", score);
            var temp = {};
            temp.username = username;
            temp.name = response.data.name;
            temp.avatar_url = response.data.avatar_url;
            temp.score = score;

            //down to db
            $http.post("/api/user", temp).then(function (response) {
                factory.index(callback);
            });
        })
    };

    return factory;
});

app.controller('usersController', function ($scope, userFactory) {

    function getUsers(data) {
        $scope.users = data;
        $scope.user1 = {};
        $scope.user2 = {};
    }
    $scope.users = [];
    $scope.username1 = "mikebrown24";
    $scope.username2 = "mpbraun2";

    $scope.index = function () {
        userFactory.index(getUsers);
    }

    $scope.index();

    $scope.createUser1 = function () {
        userFactory.createUser($scope.username1, getUsers);
    }
    $scope.createUser2 = function () {
        userFactory.createUser($scope.username2, getUsers);
    }

});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "userSelection.html",
            controller: 'usersController'
        })
        .when('/battle',{
             templateUrl: "userBattle.html",
            controller: 'usersController'
        })
        .when('/results',{
            templateUrl: "userResults.html",
             controller: 'usersController'
        })
        .when('/rankings',{
            templateUrl: "userRankings.html",
             controller: 'usersController'
        })
           
        .otherwise({ redirectTo: "/" });
});