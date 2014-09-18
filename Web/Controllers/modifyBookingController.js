rumBukkaApp.controller('modifyBookingController', function ($scope, $route, $location, $window, $rootScope, userData, bookingData) {


    userData.getUsers().$promise.then(function(users){
      $scope.Profiles = users;
      
      $scope.currentProfile = users[0];
      
      $scope.bookingUpdate = {};
      
    });

    bookingData.getBookings().$promise.then(function(bookings){
      $scope.Bookings = bookings;
      
      $scope.currentBooking = $scope.Bookings[0];
      
    });

    //$scope.currentProfile = $scope.Profiles[0];
        $scope.addBook = {
        "FirstName": "",
        "LastName": "",
        "VUWStudentId": "",
        "Type": "",
        "Phone_Phone_Id": "",
        "Organisation_Organisation_Id": "",
        };

    
        $scope.findBookings = {
        "Booking_Id": "",
        "startDate": "",
        "endDate": "",
        "Room_Room_Id": "",
        };

    $scope.srcPID;    
 $scope.idSearch = function(){
//search by id


}   

$scope.submit = function(){
//push adduser
console.log("pro "+$scope.addBook.FirstName);

}
$scope.select = function(entry){
        /*$scope.booking =$scope.Bookings;
		console.log($scope.currentProfile.F);
		var currentProfile = $scope.currentProfile;

        var addBook =$scope.addBook;

        addBook.FirstName = currentProfile.User.FirstName;
        addBook.LastName = currentProfile.User.LastName;
        addBook.VUWStudentId = currentProfile.sid;
        addBook.Type = currentProfile.stype;
        addBook.Phone_Phone_Id = currentProfile.ph;
        addBook.Organisation_Organisation_Id = currentProfile.Org;
*/

//bookingData.getBookings()

}

$scope.selectBking = function(){

        //var currentBooking = $scope.currentBooking;

        var findBookings =$scope.findBookings;

        findBookings.Booking_Id = $scope.currentBooking.Booking_Id;
        findBookings.startDate = currentBooking.startDate;
        findBookings.endDate = currentBooking.endDate;
        findBookings.Room_Room_Id= currentBooking.Room_Room_Id;


}

    $scope.delete = function(Booking_Id) {
    bookingData.deleteBooking(Booking_Id);
  }
 $scope.update = function(){
  bookingData.updateBooking($scope.bookingUpdate);
   
}




});
