rumBukkaApp.controller('modifyBookingController', function($scope, $route, $routeParams, $location, $window, $rootScope, userData, bookingData) {


    //  $scope.currentProfile = userData.getUser($routeParams.userId);
    $scope.bookingUpdate = {};
    userData.getUser($routeParams.userId).$promise.then(function(user) {
        $scope.currentProfile = user;



        bookingData.getBookings().$promise.then(function(bookings) {

            // $scope.Bookings = bookings;
            var filtered = _.filter(bookings, function(booking) {
               return  booking.User.User_Id == $scope.currentProfile.User_Id;
            });
            console.log(filtered);
            console.log("FILTERING");
            $scope.Bookings = filtered;
            $scope.currentBooking = $scope.Bookings[0];

        });
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
    $scope.idSearch = function() {
        //search by id


    }

    $scope.submit = function() {
        //push adduser
        console.log("pro " + $scope.addBook.FirstName);

    }
    $scope.select = function(entry) {
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

    $scope.selectBking = function() {

        //var currentBooking = $scope.currentBooking;

        var findBookings = $scope.findBookings;

        findBookings.Booking_Id = $scope.currentBooking.Booking_Id;
        findBookings.startDate = currentBooking.startDate;
        findBookings.endDate = currentBooking.endDate;
        findBookings.Room_Room_Id = currentBooking.Room_Room_Id;


    }

    $scope.delete = function(Booking_Id) {
        bookingData.deleteBooking(Booking_Id);
    }
    $scope.update = function() {
        bookingData.updateBooking($scope.bookingUpdate);

    }



});