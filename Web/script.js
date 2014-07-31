// script.js
var rumBukkaApp = angular.module('rumBukkaApp',['ngRoute','angularPikaday']);


rumBukkaApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'addBooking.html',
        })
        .when('/addPerson', {
            templateUrl: 'addPerson.html',
            controller:'addPersonController'
        });
});


// create the controller and inject Angular's $scope
rumBukkaApp.controller('mainController', function ($scope) {

    });






