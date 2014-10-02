
rumBukkaApp.controller('roomTimelineController', function ($scope, $route, $location, $window, bookingData) {

    
  $scope.loadChart = function(){
    console.log("load chart");
    $scope.datab = new google.visualization.DataTable();

    $scope.datab.addColumn({ type: 'string', id: 'Person' });
    $scope.datab.addColumn({ type: 'date', id: 'Start' });
    $scope.datab.addColumn({ type: 'date', id: 'End' });

    var data = [];
    for(var i = 0; i < $scope.bookings.length; i++){
      var booking = $scope.bookings[i];
      data.push([booking.User.FirstName, new Date(booking.StartDate), new Date(booking.EndDate)]);
    }
    $scope.datab.addRows(data);

    var container = document.getElementById('timeline');

    $scope.chart = new google.visualization.Timeline(container);

    google.visualization.events.addListener($scope.chart, 'select', function(){
      var selectedItem = $scope.chart.getSelection().bb;
      var value = $scope.datab.getValue(selectedItem, 0);
      $scope.message = 'The user selected ' + value;

    });
    $scope.chart.draw($scope.datab);
  };

  bookingData.getBookings().$promise.then(function(bookings){
      
    $scope.bookings = bookings;
    $scope.loadChart();
      
  });
  
  

});