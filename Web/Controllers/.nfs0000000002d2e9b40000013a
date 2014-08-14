//rumBukkaApp = angular.module('rumBukkaApp',['ngRoute'],["ngQuickDate"]);

rumBukkaApp.controller('addPersonController', function ($scope, $route, $location, userData, $window, $rootScope,organisationData) {


 organisationData.getOrganisations().$promise.then(function(orgs){
    $scope.orgs = orgs;
    
  });


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
      userData.addUser($scope.user);
      /*
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
	*/
    }

 

});



