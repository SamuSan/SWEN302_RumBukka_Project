rumBukkaApp.controller('roomListController', function($scope, $resource, $route, $location, $window, $rootScope, roomData, bookingData) {
  $scope.bookings = [];
  $scope.allBookingsRooms = [];
  $scope.Rooms =[];
  // roomData.getRooms().$promise.then(function(rooms) {

  //   $scope.Rooms = rooms;
  // });


  bookingData.getBookings().$promise.then(function(bookings) {
    $scope.allBookingsRooms = _.pluck(bookings, 'Room');
    $scope.allBookingsRooms = _.uniq(_.pluck($scope.allBookingsRooms, 'RoomName'));
    roomData.getRooms().$promise.then(function(rooms) {
      for (var i = rooms.length - 1; i >= 0; i--) {
        if(_.contains($scope.allBookingsRooms,rooms[i].RoomName))
      $scope.Rooms.push(rooms[i]);  
      };
      // $scope.Rooms = rooms;
    });
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
        // $scope.alert="No bookings for selected room"
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
    console.log($scope.allBookingsRooms);
    $scope.selectedRoom = selectedRoom;
  }
  $scope.canSelect = function(roomName) {
    return _.contains($scope.allBookingsRooms, roomName) && $scope.selectedRoom == roomName;
  }

});