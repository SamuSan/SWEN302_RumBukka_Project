// script.js

var rumBukkaApp = angular.module('rumBukkaApp',['ngResource','ngRoute','ui.bootstrap', 'ngTable', 'ngAnimate']);


rumBukkaApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
            .when('/', {
            templateUrl: 'person.html',
        })
            .when('/addPerson/name/:userName?/userid/:userid?', {
            templateUrl: 'addPerson.html',
            controller: 'addPersonController'
        })
	.when('/person/:confirm?', {
            templateUrl: 'person.html',
            controller: 'personController'
        })
        .when('/modifyBooking/:userId', {
            templateUrl: 'modifyBooking.html',
            controller: 'modifyBookingController'
        })
        .when('/addBooking/:userId', {
            templateUrl: 'addBooking.html',
            controller: 'addBookingController'
        })
        .when('/addRoom', {
            templateUrl: 'addRoom.html',
            controller: 'addRoomController'
        })
        .when('/roomTimeline', {
            templateUrl: 'roomTimeline.html',
            controller: 'roomTimelineController'
        })
        .when('/roomSummary', {
            templateUrl: 'roomSummary.html',
            controller: 'roomListController'
        })
	.when('/modifyPerson', {
            templateUrl: 'modifyPerson.html',
            controller:'modifyPersonController'
        })
	.when('/confirmBooking/:userId', {
            templateUrl: 'confirmBooking.html',
            controller:'confirmBookingController'
        });
});
// create the controller and inject Angular's $scope
rumBukkaApp.controller('mainController', function($scope) {});
