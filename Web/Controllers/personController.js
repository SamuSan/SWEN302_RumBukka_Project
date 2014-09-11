rumBukkaApp.controller('personController', function ($scope, $filter,ngTableParams, userData, $location) {


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
	
  

