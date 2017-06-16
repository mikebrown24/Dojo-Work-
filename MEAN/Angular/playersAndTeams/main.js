var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
      $routeProvider
        .when('/players',{
            templateUrl: 'partials/players.html',
        })
        .when('/teams',{
            templateUrl: 'partials/teams.html',
        })
        .when('/associations', {
            templateUrl: 'partials/associations.html',
        })
        .otherwise({
            redirectTo: '/players'
    });
});

app.factory('playerFactory', function(){
    var factory = {};
    factory.players = [];
    factory.index = function(callback){
        callback(factory.players);
    }
    //Add new player to the list 
    factory.createPlayer = function(player, callback){
        factory.users.push(player);
        callback(factory.players);
    }
    //Delete player from the list
    factory.deletePlayer = function(i, callback){
        factory.players.splice(i,1);
        callback(factory.players);
    }
    return factory;
});

app.factory('teamFactory', function(){
    var factory = {};
    factory.teams = [];
    
    factory.createTeam = function(team, callback){
        factory.teams.push(team);
        callback(factory.teams);
    }
    factory.deleteTeam = function(i, callback){
        factory.teams.splice(i,1);
        callback(factory.teams);
    }
    return factory;
});

app.controller('PlayerController', ['$scope', 'playerFactory', function($scope, playerFactory){
    function getPlayers(data){
        $scope.players = data;
        $scope.player = {};
    }
    $scope.players = [];
    $scope.player = {};

    $scope.createPlayer = function(){
        playerFactory.createPlayer($scope.player, getPlayers);
    }
    $scope.deletePlayer = function(i){
        playerFactory.deletePlayer(i, getPlayers);
    }
}]);

app.controller('teamController', ['$scope', 'teamFactory', function($scope, teamFactory){
    function getTeams(data){
        $scope.teams = data;
        $scope.team = {};
    }
    $scope.teams = [];
    $scope.team = {};

    $scope.createTeam = function(){
        teamFactory.createTeam($scope.player, getPlayers);
    }
    $scope.deleteTeam = function(i){
        teamFactory.deleteTeam(i, getTeams);
    }
}]);

