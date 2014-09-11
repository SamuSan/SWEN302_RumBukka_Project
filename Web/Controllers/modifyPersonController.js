rumBukkaApp.controller('modifyPersonController', function ($scope, $route, $location, $window, $rootScope, organisationData, userData, bookingData) {


    organisationData.getOrganisations().$promise.then(function(orgs){
    $scope.orgs = orgs;
    
  });


        //submit function
    $scope.submit = function(){
      userData.addUser($scope.user);      
    }
    
    userData.getUsers().$promise.then(function(users){
      $scope.Profiles = users;
      
      
    });
    $scope.delete = function(Student_Id) {
    userData.deleteUser(Student_Id);
  }

 

});

