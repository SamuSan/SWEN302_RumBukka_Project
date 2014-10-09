 

rumBukkaApp.controller('confirmBookingController', function ($routeParams, $scope, $resource, $route, $location, $window, userData, roomData, bookingData) {
	
 
  if(bookingData.newBooking == null)
    $location.url('/addBooking/' + $routeParams.userId);
  
      $scope.user = bookingData.newBooking.User;
      $scope.room = bookingData.newBooking.Room;
      var sdate = new Date(bookingData.newBooking.StartDate);
      bookingData.newBooking.StartDate = new Date(sdate).toISOString().replace('T', ' ');
      $scope.nicestartdate = sdate.toString();
      
      var edate = new Date(bookingData.newBooking.EndDate);
      bookingData.newBooking.EndDate = new Date(edate).toISOString().replace('T', ' ');
      $scope.niceenddate = edate.toString();
      
      //alert(bookingData.newBooking.StartDate);
console.log("AFTER" + bookingData.newBooking.StartDate);
  $scope.submit = function(){
    bookingData.addBooking(bookingData.newBooking).$promise.then(function(booking){
      $location.url('/profile/' + $scope.user.User_Id);
    });
  }
  $scope.cancel = function(){
     $location.url('/addBooking/' + $routeParams.userId);
  }
      
  
});