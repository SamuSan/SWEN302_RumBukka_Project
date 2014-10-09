rumBukkaApp.controller('modifyBookingController', function($scope, $route, $routeParams, $location, $window, $rootScope, userData, bookingData) {


    //  $scope.currentProfile = userData.getUser($routeParams.userId);
    $scope.booking = {};

  
    bookingData.getBooking($routeParams.bookingId).$promise.then(function(booking) {
        $scope.booking = booking;
    });

    $scope.cancel = function() {
        $location.url('/profile/' + $scope.booking.User.User_Id);
    }
    
    $scope.update = function() {
        bookingData.updateBooking($scope.booking);
        $location.url("/profile/" + $scope.booking.User.User_Id);
    }





  //Set the start date
  $scope.today = function() {
    $scope.startDate = new Date();
  };
  $scope.today();
  //Auto sets the end date to minimum one day after start date
  $scope.lastDay = function() {
    $scope.endDate = new Date();
    $scope.endDate.setDate(new Date().getDate()+1);
    $scope.duration = ($scope.endDate.getDate() - $scope.startDate.getDate())
  };
  $scope.lastDay();

  $scope.clear = function() {
    $scope.startDate = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? $scope.startDate : new Date();
  };
  $scope.toggleMin();

  $scope.openStart = function($event) {
    console.log("I AM OPENING START")
    $event.preventDefault();
    $event.stopPropagation();

    $scope.enOpened = false;
    $scope.opened = true;
  };

  $scope.openEnd = function($event) {
    console.log("I AM OPENING END")
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = false;
    $scope.enOpened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];












});