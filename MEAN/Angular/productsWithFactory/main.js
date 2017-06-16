var app = angular.module('productsApp', []);
app.factory('productFactory', function(){
            var factory = {};
            factory.products = [];
            factory.index = function(callback){
                callback(factory.products);
            }
            factory.createProduct = function(product, callback){
                
                factory.products.push(product);
                callback(factory.products);
            }
            factory.deleteProduct = function(i, callback){
                factory.products.splice(i,1);
                callback(factory.products);
            }
            return factory;
        });

app.controller('productController', ['$scope', 'productFactory', function($scope, productFactory){ //
           
            function getProducts(data){
                $scope.products = data;
                $scope.product = {};
            }
             $scope.products = [];
             $scope.product = {};

             $scope.index = function(){
                 productFactory.index(getProducts);
             }
             
             $scope.createProduct = function(){
                 productFactory.createProduct($scope.product, getProducts);
             }
             $scope.deleteProduct = function(i){
                 productFactory.deleteProduct(i, getProducts);
             }
        }]);