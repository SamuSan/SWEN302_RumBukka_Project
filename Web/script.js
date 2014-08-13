<<<<<<< HEAD
// script.js
var rumBukkaApp = angular.module('rumBukkaApp',['ngResource','ngRoute','googlechart']);


rumBukkaApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'addBooking.html',
        })
        .when('/addPerson', {
            templateUrl: 'addPerson.html',
            controller:'addPersonController'
        })
                .when('/roomTimeline', {
            templateUrl: 'roomTimeline.html',
            controller:'roomTimelineController'
        })
                 .when('/modifyBooking', {
            templateUrl: 'modifyBooking.html',
            controller:'modifyBookingController'
        })
                .when('/addBooking', {
            templateUrl: 'addBooking.html',
            controller:'addBookingController'
        });

});


// create the controller and inject Angular's $scope
rumBukkaApp.controller('mainController', function ($scope) {

    });






=======
// script.js
var rumBukkaApp = angular.module('rumBukkaApp',['ngResource','ngRoute','angularPikaday','googlechart']);


rumBukkaApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'addBooking.html',
        })
        .when('/addPerson', {
            templateUrl: 'addPerson.html',
            controller:'addPersonController'
        })
                .when('/roomTimeline', {
            templateUrl: 'roomTimeline.html',
            controller:'roomTimelineController'
        })
                 .when('/modifyBooking', {
            templateUrl: 'modifyBooking.html',
            controller:'modifyBookingController'
        })
                .when('/addBooking', {
            templateUrl: 'addBooking.html',
            controller:'addBookingController'
        });

});


// create the controller and inject Angular's $scope
rumBukkaApp.controller('mainController', function ($scope) {

    });






>>>>>>> c1faec99de944192e2411b2eb07b9ff048e27395
