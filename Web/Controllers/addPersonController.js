 var rumBukkaApp = angular.module('rumBukkaApp',['ngRoute']);

rumBukkaApp.controller('addPersonController', function ($scope, $route, $location, $window, $rootScope) {
 var departs = ["Engineering and Computer Science", "Science", "Maths", "Bachelor of arts/working at mcdonalds"];
 $scope.departs = departs;
  $scope.newUser = {
        "firstName": "",
        "lastName": "",
        "SID": "",
        "startDate":"",
        "endDate": "",
        "department": ""
    };

    //submit function
    

}