// script.js
var rumBukkaApp = angular.module('rumBukkaApp',['ngRoute']);


rumBukkaApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'addBooking.html',
        });
});


// create the controller and inject Angular's $scope
rumBukkaApp.controller('mainController', function ($scope) {

    });






