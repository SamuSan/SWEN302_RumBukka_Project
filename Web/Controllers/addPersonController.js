rumBukkaApp.controller('addPersonController', function ($scope, $route, $location, userData, $window, $rootScope,organisationData) {


 organisationData.getOrganisations().$promise.then(function(orgs){
    $scope.orgs = orgs;
    
  });

$scope.userTypes = ["Hons","Masters","PHD", "Faculty"]

    //submit function
$scope.submit = function(){
$scope.user.Type = $scope.userTypes.indexOf($scope.user.Type)
userData.addUser($scope.user).$promise.then(function(user){

	console.log(user + " " + user.Student_Id);
	$location.url("addBooking/"+ user.Student_Id)      	

	});

}

 

});



