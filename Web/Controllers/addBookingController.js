rumBukkaApp.controller('addBookingController', function($routeParams, $scope, $resource, $route, $location, $window, userData, roomData, bookingData) {

  userData.getUser($routeParams.userId).$promise.then(function(user) {
    $scope.currentProfile = user;

    roomData.getRooms().$promise.then(function(rooms) {

      $scope.Rooms = rooms;
    });
$scope.startDatesArray = [1];
  $scope.endDatesArray=[1];
  });

  bookingData.getBookings().$promise.then(function(bookings) {
    $scope.Bookings = bookings;
  });


  
 /* $scope.startDatesArray = [(new Date($scope.startDate))];
  $scope.endDatesArray=[(new Date($scope.endDate))];*/
  $scope.setDates = function(room, start, end){
    //sets desired date to compare
    $scope.startDatesArray[0] = start;
    $scope.endDatesArray[0] = end;
    var i =1;
    //Fill in the rest of the array for specified room
     angular.forEach($scope.Bookings, function(value, key) {
      if (value.Room.Room_Id == room.Room_Id) {
	$scope.startDatesArray[i] = new Date(value.StartDate);
	$scope.endDatesArray[i] = new Date(value.EndDate);
	i++;
      }
    });
     return i;
  }

  $scope.selectedRoom = null;

  $scope.setSelected = function(selectedRoom) {
    $scope.selectedRoom = selectedRoom;
  }
 $scope.cap =0;
  $scope.getStyle = function(entry) {
    var style;
  $scope.startDatesArray = [];
  $scope.endDatesArray = [];
    // console.log(new Date(Date.parse(document.getElementById('DP').value)));
  $scope.setDates(entry, new Date(Date.parse(document.getElementById('DP').value)), new Date(Date.parse(document.getElementById('DPE').value)));
 $scope.cap = countmax($scope.startDatesArray, $scope.endDatesArray)-1;
 var dates = $scope.startDatesArray[0]; 
 //console.log(dates.toString());
    var percentage = ($scope.cap / entry.Capacity) * 100;
    if (percentage > 66) {
      style = "full"
    } else if (percentage < 66 && percentage > 33) {
      style = "halffull"
    } else if (percentage < 33) {
      style = "empty"
    }

    if ($scope.currentProfile.Organisation.Organisation_Id != entry.Organisation.Organisation_Id) {
      style += " wrongorg "
    }
    return style;
  }

  //1412208191000
  //1412208205000
  $scope.submit = function() {
    
    var error = false;
    
    if ($scope.selectedRoom == null) {
      alert("Select a room");
      error = true;
      return;
    }
    bookingData.newBooking.StartDate = new Date(Date.parse(document.getElementById('DP').value));
    bookingData.newBooking.EndDate = new Date(Date.parse(document.getElementById('DPE').value));
    bookingData.newBooking.User = $scope.currentProfile;
    bookingData.newBooking.Room = $scope.selectedRoom;
    if (bookingData.newBooking.StartDate > bookingData.newBooking.EndDate) {
      alert("Start date cannot be after end date");
      error = true;
      return;
    }
    angular.forEach($scope.Bookings, function(value, key) {
      if (value.User.User_Id == bookingData.newBooking.User.User_Id) {
        if ((bookingData.newBooking.StartDate < new Date(value.StartDate) && bookingData.newBooking.EndDate > new Date(value.EndDate)) ||
          (bookingData.newBooking.StartDate > new Date(value.StartDate) && bookingData.newBooking.EndDate < new Date(value.EndDate)) ||
          (bookingData.newBooking.StartDate < new Date(value.StartDate) && bookingData.newBooking.EndDate > new Date(value.StartDate)) ||
          (bookingData.newBooking.StartDate < new Date(value.EndDate) && bookingData.newBooking.EndDate > new Date(value.EndDate))) { //If date does not overlap current booking for user
          alert("Bookings cannot overlap");
	  error = true;
          return;
        }
      }
    });
    if(!error)
      $location.url("confirmBooking/" + $scope.currentProfile.User_Id);

  }

  $scope.cancel = function() {
     $location.url('/profile/' + $scope.currentProfile.User_Id);
  }

  /*Given references to an array of start dates and an array of end dates for
occupancies in an office, figure out the maximum number of occupants in
that office over those periods.
Dates are in milliseconds
The first entries in each array are the date period we are checking for maximum
people over.
Minumum returned is 1 as adds in person you are trying to add.*/

var countmax = function(startDates, endDates){
  var start = startDates[0];
  var end= endDates[0];
  var max=1;
  for(var count =0; count < startDates.length; count++){
    var startDate = startDates[count];
    /*ind start points in the range values*/
    if(startDate >= start && startDate <= end){
    var temp=0;
    /*Count all time periods that bridge the start point*/
      for(var count2 =0; count2 < startDates.length; count2++){
    var startDate2 = startDates[count2];
    var endDate2 = endDates[count2];
    if(startDate2 <= startDate && endDate2 >= startDate){
      temp++;
    }
      }
      if(temp > max){
      /*take maximum count which will be the maximum number of people
        over the time period.*/
    max = temp;
      }
    }
  }
  return max;
}

  
  Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
    return this;

  }
  $scope.dateChanged = false;
  
$scope.$watch('endDate',function(oldVal,newVal){ 
    //Check for future booking
    if(newVal < $scope.startDate){
        $scope.endDate.setDate($scope.startDate.getDate());
    }
    if(oldVal !=newVal){
      $scope.duration = ($scope.endDate.getDate() - $scope.startDate.getDate())
      $scope.endDatesArray=[];
      //for each room update array
      angular.forEach($scope.Rooms, function(value, key) {
	$scope.getStyle(value);
      });
      $scope.dateChanged=true;
    }
});


$scope.$watch('startDate',function(oldVal,newVal){ 
    //Check for future booking
        if(newVal > $scope.endDate){
        console.log("Return to the future")
    }
    if(oldVal !=newVal){
      $scope.duration = ($scope.endDate.getDate() - $scope.startDate.getDate())
      $scope.startDatesArray = [];
      //for each room update array
      angular.forEach($scope.Rooms, function(value, key) {
	$scope.getStyle(value);
      });
      $scope.dateChanged=true;
    }
    console.log("UPDATE" + $scope.startDate);
});

  //Set the start date
  $scope.today = function() {
    $scope.startDate = new Date();
  };
  $scope.today();
  //Auto sets the end date to minimum one day after start date
  $scope.lastDay = function() {
    $scope.endDate = new Date();
    $scope.endDate.addDays(1);
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

  //$scope.$apply();
});