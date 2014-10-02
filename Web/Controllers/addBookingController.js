
rumBukkaApp.controller('addBookingController', function ($routeParams, $scope, $resource, $route, $location, $window, userData, roomData, bookingData) {

    userData.getUser($routeParams.userId).$promise.then(function(user){
      $scope.currentProfile = user;
      
      roomData.getRooms().$promise.then(function(rooms){
	  
	$scope.Rooms = rooms;
      });
      
    });

    bookingData.getBookings().$promise.then(function(bookings){
      $scope.Bookings = bookings;     
    });


    $scope.selectedRoom = null;
    
    $scope.setSelected = function(selectedRoom) {
       $scope.selectedRoom = selectedRoom;
       //console.log(selectedRoom);
       /*< class = "rb-hLink-container"><a class= "rb-header-link" href = "#roomTimeline"> RoomTimeline</a></div>*/
    }

    $scope.getStyle = function (entry) {
      var style;
     //Find room name 
      /*
    angular.forEach($scope.Bookings, function(value, key) {
       if(entry.RoomName == value.Room.RoomName){
        console.log(Date.parse($scope.startDate.toString()) + '=' + Date.parse(value.StartDate));
        //get count of booking
       //console.log(count +" "+ entry.RoomName);
        //if((value.StartDate<= $scope.startDate && value.EndDate>= $scope.startDate) || (value.StartDate<= $scope.EndDate && value.EndDate>= $scope.startDate) ){
          /*if(
            (Date.parse($scope.startDate.toString()) < Date.parse(value.StartDate) && (Date.parse($scope.endDate.toString()) > Date.parse(value.EndDate))) || 
            (Date.parse($scope.startDate.toString()) > Date.parse(value.StartDate) && (Date.parse($scope.endDate.toString()) > Date.parse(value.EndDate))) ||
            (Date.parse($scope.startDate.toString()) < Date.parse(value.StartDate) && (Date.parse($scope.endDate.toString()) < Date.parse(value.EndDate))) ||
            (Date.parse($scope.startDate.toString()) > Date.parse(value.StartDate) && (Date.parse($scope.endDate.toString()) < Date.parse(value.EndDate))) ||
            value.EndDate == null
            )
           {
	    count++;
	    console.log(count +" "+ entry.RoomName);
	  }
	  
      }
     });
    */
	var percentage = (entry.CurrentBookingCount/entry.Capacity)*100;
	if(percentage>66){
	    style = "full"
	}
	else if(percentage<66 && percentage>33){
	    style = "halffull"
	}
	else if(percentage<33){
	    style = "empty"
	}
	
	if($scope.currentProfile.Organisation.Organisation_Id != entry.Organisation.Organisation_Id){
	  style += " wrongorg "
	}
	return style;
    }

//1412208191000
//1412208205000
$scope.submit = function(){
  
  //alert($scope.startDate);
  //alert();
  
  bookingData.newBooking.StartDate = new Date(Date.parse(document.getElementById('DP').value));
  bookingData.newBooking.EndDate = new Date(Date.parse(document.getElementById('DPE').value));
  bookingData.newBooking.User = $scope.currentProfile;
  bookingData.newBooking.Room = $scope.selectedRoom;
  
  //console.log("OTHER" + $scope.startDate);
  //console.log("BEFORE" + $rootScope.newBooking.StartDate);
  $location.url("confirmBooking/" +  $scope.currentProfile.User_Id);

}

  $scope.cancel = function(){
     $location.url('/person');
  }

Date.prototype.addDays = function(days){
  this.setDate(this.getDate() + days);
  return this;

}
$scope.dateChanged=false;
/*
$scope.$watch('endDate',function(oldVal,newVal){ 
    //Check for future booking
    if(newVal < $scope.startDate){
        $scope.endDate.setDate($scope.startDate.getDate());
    }
    if(oldVal !=newVal){
      $scope.duration = ($scope.endDate.getDate() - $scope.startDate.getDate())
      $scope.dateChanged=true;
    }
    $scope.$apply();
},true);


$scope.$watch('startDate',function(oldVal,newVal){ 
    //Check for future booking
        if(newVal > $scope.endDate){
        console.log("Return to the future")
    }
    if(oldVal !=newVal){
      $scope.duration = ($scope.endDate.getDate() - $scope.startDate.getDate())
      $scope.dateChanged=true;
    }
    console.log("UPDATE" + $scope.startDate);
},true);
*/
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

  $scope.clear = function () {
    $scope.startDate = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
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

    $scope.opened =false;
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




    


