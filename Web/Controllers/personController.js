rumBukkaApp.controller('personController', function ($routeParams, $scope, $filter,ngTableParams, userData, $location) {
if($routeParams.confirm != null) {
  $scope.confirm = true;
  setTimeout(function(){ 
    //
    $scope.$apply(function(){
      $scope.confirm = false; 
      
    });
    //alert('herro');
  }, 5000);
}

    $scope.users = userData.getUsers();

 	$scope.redirect = function(type, user){
		 if (type == 'add') {
		 var name = $scope.input;
		 $location.url("addPerson/" + name);
		 }
		 else if(type == 'select'){
		 $location.url("addBooking/" + user.Student_Id);
		 };

 		}
 	
});
	
  

//Comment