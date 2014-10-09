rumBukkaApp.controller('roomListController', function($scope, $resource, $route, $location, $window, $rootScope, roomData, bookingData) {
  $scope.bookings = [];
  roomData.getRooms().$promise.then(function(rooms) {

    $scope.Rooms = rooms;
  });

  //submit function
  $scope.submit = function() {

    bookingData.getBookings().$promise.then(function(bookings) {

      console.log(bookings);
      for (var i = bookings.length - 1; i >= 0; i--) {
        if (bookings[i].Room.RoomName == $scope.selectedRoom) {
          $scope.bookings.push(bookings[i]);
        }

      };
      if ($scope.bookings.length == 0) {
        alert("No bookings for selected room");
        $location.url('/roomSummary');
      } else if ($scope.selectedRoom != null) {
        $location.url('/roomTimeline/' + $scope.selectedRoom);
      }

    });



  };
  $scope.cancel = function() {
    $location.url('/');
  }

  $scope.selectedRoom = null;
  $scope.setSelected = function(selectedRoom) {
    $scope.selectedRoom = selectedRoom;
    console.log(selectedRoom);
    /*< class = "rb-hLink-container"><a class= "rb-header-link" href = "#roomTimeline"> RoomTimeline</a></div>*/
  }


});