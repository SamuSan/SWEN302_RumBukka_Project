rumBukkaApp.controller('addPersonController', function ($scope, $route, $routeParams, $location, userData, $window, $rootScope,organisationData) {
$scope.user= {};
 organisationData.getOrganisations().$promise.then(function(orgs){
    $scope.orgs = orgs;
    
  });

$scope.userTypes = ["Hons","Masters","PHD", "Faculty"]
$scope.user.FirstName = $routeParams.userName;
    //submit function
$scope.submit = function(){
$scope.user.Type = $scope.userTypes.indexOf($scope.user.Type)
userData.addUser($scope.user).$promise.then(function(user){

	console.log(user + " " + user.Student_Id);
	$location.url("addBooking/"+ user.Student_Id)      	

	});

}
$scope.reversed = false;
$scope.reverse = function(){
			if(!$scope.reversed){	
			$scope.user.LastName = $scope.user.FirstName;
			$scope.user.FirstName = "";
			$scope.reversed = true;
		}

	}  

});



