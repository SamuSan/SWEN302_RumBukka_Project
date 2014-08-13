//rumBukkaApp = angular.module('rumBukkaApp',['ngRoute'],["ngQuickDate"]);

rumBukkaApp.controller('addPersonController', function ($scope, $route, $location, $window, $rootScope) {

     $scope.departs = ["Engineering and Computer Science", "Science", "Maths", "Bachelor of arts/working at mcdonalds"];
     $scope.defaultDep = $scope.departs[0];
     $scope.newUser = {
        "FirstName": "",
        "LastName": "",
        "VUWStudentId": "",
        "Type": "",
        "Phone_Phone_Id": "",
        "Organisation_Organisation_Id": "",
        "startDate":"",
        "endDate": "",
    };

        //submit function
    $scope.submit = function(){
        var newUser = $scope.newUser;
        $scope.addUser = {
        "FirstName": "",
        "LastName": "",
        "VUWStudentId": "",
        "Type": "",
        "Phone_Phone_Id": "",
        "Organisation_Organisation_Id": "",
        "startDate":"",
        "endDate": "",
        };
        var addUser =$scope.addUser;
        addUser.FirstName = newUser.FirstName;
        addUser.LastName = newUser.LastName;
        addUser.VUWStudentId = newUser.VUWStudentId;
        addUser.Type = newUser.Type;
        addUser.Phone_Phone_Id = newUser.Phone_Phone_Id;
        addUser.Organisation_Organisation_Id = newUser.Organisation_Organisation_Id;
        addUser.startDate = newUser.startDate;
        addUser.endDate = newUser.endDate;
    }

 

});



