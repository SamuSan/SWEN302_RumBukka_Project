
// script.js
var rumBukkaApp = angular.module('rumBukkaApp',['ngResource','ngRoute','ui.bootstrap','ngTable']);


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
        })
                .when('/addRoom', {
            templateUrl: 'addRoom.html',
            controller:'addRoomController'
        })
		.when('/roomSummary', {
            templateUrl: 'roomSummary.html',
            controller:'roomListController'
        })
        .when('/person', {
            templateUrl: 'person.html',
            controller:'personController'
        })
		.when('/modifyPerson', {
            templateUrl: 'modifyPerson.html',
            controller:'modifyPersonController'
        });

});


// create the controller and inject Angular's $scope
rumBukkaApp.controller('mainController', function ($scope) {

    });

