 

rumBukkaApp.controller('confirmBookingController', function ($routeParams, $scope, $resource, $route, $location, $window, $rootScope, userData, roomData, bookingData) {
	
  if($rootScope.newBooking == null)
    $location.url('/addBooking/' + $routeParams.userId);
  
      $scope.user = $rootScope.newBooking.User;
      $scope.room = $rootScope.newBooking.Room;
      var sdate = new Date($rootScope.newBooking.StartDate);
      $scope.startDate = sdate.toString();
      var edate = new Date($rootScope.newBooking.EndDate);
      $scope.endDate = edate.toString();

  $scope.submit = function(){
    bookingData.addBooking($rootScope.newBooking).$promise.then(function(booking){
      $location.url('/person/confirm');
    });
  }
  $scope.cancel = function(){
     $location.url('/addBooking/' + $routeParams.userId);
  }
      
  
});