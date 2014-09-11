
rumBukkaApp.controller('addBookingController', function ($scope, $resource, $route, $location, $window, $rootScope, userData, roomData, bookingData) {

    userData.getUsers().$promise.then(function(users){
      $scope.Profiles = users;
      
      $scope.currentProfile = users[0];
      
    });
     bookingData.getBookings().$promise.then(function(bookings){
      $scope.Bookings = bookings;     
    });

    roomData.getRooms().$promise.then(function(rooms){
	
      $scope.Rooms = rooms;
      });
    
        $scope.addBook = {
        "FirstName": "",
        "LastName": "",
        "VUWStudentId": "",
        "Type": "",
        "Phone_Phone_Id": "",
        "Organisation_Organisation_Id": "",

        };

	
	
    $scope.srcPID;    
 $scope.idSearch = function(){
//search by id


}   

 $scope.selectedRoom = null;
    $scope.setSelected = function(selectedRoom) {
       $scope.selectedRoom = selectedRoom;
       //console.log(selectedRoom);
       /*< class = "rb-hLink-container"><a class= "rb-header-link" href = "#roomTimeline"> RoomTimeline</a></div>*/
    }

    $scope.getStyle = function (entry) {
      var count =0;
     //Find room name 
    angular.forEach($scope.Bookings, function(value, key) {
       if(entry.RoomName == value.Room.RoomName){
        console.log(Date.parse($scope.startDate.toString()) + '=' + Date.parse(value.StartDate));
        //get count of booking
       //console.log(count +" "+ entry.RoomName);
        //if((value.StartDate<= $scope.startDate && value.EndDate>= $scope.startDate) || (value.StartDate<= $scope.EndDate && value.EndDate>= $scope.startDate) ){
          if(
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
    
var percentage = (count/10)*100;
     if(percentage>66){
        return "color: red;"
     }
     else if(percentage<66 && percentage>33){
        return "color: orange;"
     }
     else if(percentage<33){
        return "color: green;"
     }

}


$scope.submit = function(){
//push adduser
//console.log("pro "+$scope.addBook.FirstName);

}
$scope.select = function(){

		console.log($scope.currentProfile.fname);
		var currentProfile = $scope.currentProfile;

        var addBook =$scope.addBook;

        addBook.FirstName = currentProfile.fname;
        addBook.LastName = currentProfile.lname;
        addBook.VUWStudentId = currentProfile.sid;
        addBook.Type = currentProfile.stype;
        addBook.Phone_Phone_Id = currentProfile.ph;
        addBook.Organisation_Organisation_Id = currentProfile.Org;


}
Date.prototype.addDays = function(days){
this.setDate(this.getDate() + days);
return this;

}
$scope.dateChanged=false;
$scope.$watch('endDate',function(oldVal,newVal){ 
    //Check for future booking
    if(newVal < $scope.startDate){
        $scope.endDate.setDate($scope.startDate.getDate());
    }
    if(oldVal !=newVal){
                $scope.duration = ($scope.endDate.getDate() - $scope.startDate.getDate())
            $scope.dateChanged=true;
    }        
});
$scope.$watch('startDate',function(oldVal,newVal){ 
    //Check for future booking
        if(newVal > $scope.endDate){
        console.log("Reutrn to the futrue")
    }
    if(oldVal !=newVal){
                $scope.duration = ($scope.endDate.getDate() - $scope.startDate.getDate())
            $scope.dateChanged=true;
    }        
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


});




    


