rumBukkaApp.controller('roomTimelineController', function($scope, $route, $routeParams, $location, $window, bookingData) {
  $scope.selectedRoom = $routeParams.roomName;
  console.log($scope.selectedRoom);

  $scope.message = "Sausages";
  $scope.loadChart = function() {
    console.log("load chart");
    $scope.datab = new google.visualization.DataTable();

    $scope.datab.addColumn({
      type: 'string',
      id: 'SeatNumber'
    });
    $scope.datab.addColumn({
      type: 'string',
      id: 'FirstName'
    });
    $scope.datab.addColumn({
      type: 'date',
      id: 'Start'
    });
    $scope.datab.addColumn({
      type: 'date',
      id: 'End'
    });

    var data = [];
    for (var i = 0; i < $scope.bookings.length; i++) {
      var booking = $scope.bookings[i];
      data.push(["Seat Number " + booking.SeatNumber.toString(), booking.User.FirstName + ' ' + booking.User.LastName, new Date(booking.StartDate), new Date(booking.EndDate)]);
    }

    $scope.datab.addRows(data);

    var container = document.getElementById('timeline');

    $scope.chart = new google.visualization.Timeline(container);

    google.visualization.events.addListener($scope.chart, 'select', function() {
      var selectedItem = $scope.chart.getSelection()[0].bb;

      var url = 'modifyBooking/' + $scope.bookings[selectedItem].Booking_Id;
      //alert(url);
      //$location.url(url);

      window.location = window.location.origin + '/#/' + url;

      //var value = $scope.datab.getValue(selectedItem, 0);
      return true;
      //$scope.message = 'The user selected ' + value;

    });
    $scope.chart.draw($scope.datab, {

      timeline: {}

    });
  };
  //End Load Chart
  bookingData.getBookings().$promise.then(function(bookings) {
    $scope.bookings = [];
    console.log(bookings);
    for (var i = bookings.length - 1; i >= 0; i--) {
      if (bookings[i].Room.RoomName == $scope.selectedRoom) {
        $scope.bookings.push(bookings[i]);
      }

    };
    $scope.loadChart();
  });
});