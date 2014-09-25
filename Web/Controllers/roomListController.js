rumBukkaApp.controller('roomListController', function($scope, $resource, $route, $location, $window, $rootScope, roomData) {
  roomData.getRooms().$promise.then(function(rooms) {

    $scope.Rooms = rooms;
  });

  //submit function
  $scope.submit = function() {

    if ($scope.selectedRoom != null) {
      $location.url('/roomTimeline');
    }
  };
$scope.cancel = function(){
   $location.url('/');
}

  $scope.selectedRoom = null;
  $scope.setSelected = function(selectedRoom) {
    $scope.selectedRoom = selectedRoom;
    console.log(selectedRoom);
    /*< class = "rb-hLink-container"><a class= "rb-header-link" href = "#roomTimeline"> RoomTimeline</a></div>*/
  }


});