var app = angular.module("myApp", ['ngRoute', 'ngMessages']);
app.factory('noteFactory', function($http){
            var factory = {};
            factory.notes = [];
    factory.index = function (callback) {
        $http.get("/api").then(function (response) {
            factory.notes = response.data.notes;
            callback(factory.notes);
        });
    };
    
    factory.createNote = function (note, callback) {
        $http.post("/api/note", note).then(function (response) {
            factory.index(callback);
        });
    };
           
            return factory;
        });

app.controller('NotesController', function($scope, noteFactory){ 
           
            function getNotes(data){
                $scope.notes = data;
                $scope.note = {};
            }
             $scope.notes = [];
             $scope.note = {};

             $scope.index = function(){
                 noteFactory.index(getNotes);
             }

             $scope.index();
             
             $scope.createNote = function(){
                 noteFactory.createNote($scope.note, getNotes);
             }
           
        });

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "notesPartial.html",
        controller: 'NotesController'
    })
    .otherwise({ redirectTo: "/" });
});