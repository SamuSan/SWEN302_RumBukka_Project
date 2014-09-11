

rumBukkaApp.controller('addBookingController', function ($scope, $resource, $route, $location, $window, $rootScope, userData, roomData) {

    userData.getUsers().$promise.then(function(users){
      $scope.Profiles = users;
      
      $scope.currentProfile = users[0];
      
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




    


