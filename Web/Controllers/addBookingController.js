

rumBukkaApp.controller('addBookingController', function ($scope, $resource, $route, $location, $window, $rootScope, userData) {

    userData.getUsers().$promise.then(function(users){
      $scope.Profiles = users;
      
      $scope.currentProfile = users[0];
      
      alert(users.length);
      
    });

    $scope.Rooms = ["A","B","C","D"];

        $scope.addBook = {
        "FirstName": "",
        "LastName": "",
        "VUWStudentId": "",
        "Type": "",
        "Phone_Phone_Id": "",
        "Organisation_Organisation_Id": "",

        };

    $scope.input1;    
 $scope.idSearch = function(){
//search by id


}   

$scope.submit = function(){
//push adduser
console.log("pro "+$scope.addBook.FirstName);

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




});




