

rumBukkaApp.controller('addRoomController', function ($scope, $resource, $route, $location, roomData, organisationData) {
  
  $scope.room = {};
  
  organisationData.getOrganisations().$promise.then(function(orgs){
    $scope.orgs = orgs;
    
  });
  
  $scope.submit = function() {
    roomData.addRoom($scope.room);
  }
});


