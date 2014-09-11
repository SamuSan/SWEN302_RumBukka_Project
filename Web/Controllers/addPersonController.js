rumBukkaApp.controller('addPersonController', function ($scope, $route, $routeParams, $location, userData, $window, $rootScope,organisationData) {
	$scope.user= {};
	
	organisationData.getOrganisations().$promise.then(function(orgs){
		$scope.orgs = orgs;

	});

	$scope.userTypes = ["Hons","Masters","PHD", "Faculty"]

	$scope.getName = function(index) {
		var name = $routeParams.userName;
		return name.split(' ')[index];
	}

	$scope.user.FirstName = $scope.getName(0);
	$scope.user.LastName = $scope.getName(1);
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
		if(!$scope.reversed && $scope.user.LastName == ''){	
			$scope.user.LastName = $scope.user.FirstName;
			$scope.user.FirstName = "";
			$scope.reversed = true;
		}

	}

});



