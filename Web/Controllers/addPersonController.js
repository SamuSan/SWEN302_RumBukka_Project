//rumBukkaApp = angular.module('rumBukkaApp',['ngRoute'],["ngQuickDate"]);

rumBukkaApp.controller('addPersonController', function ($scope, $route, $location, userData, $window, $rootScope,organisationData) {


 organisationData.getOrganisations().$promise.then(function(orgs){
    $scope.orgs = orgs;
    
  });


        //submit function
    $scope.submit = function(){
      userData.addUser($scope.user);      
    }

 

});



