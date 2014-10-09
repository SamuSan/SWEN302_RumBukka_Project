rumBukkaApp.controller('addPersonController', function($scope, $route, $routeParams, $location, userData, $window, $rootScope, organisationData, bookingData) {

	$scope.userTypes = ["Hons", "Masters", "PHD", "Faculty"]

	$scope.title = '';
	$scope.adding;

	organisationData.getOrganisations().$promise.then(function(orgs) {

		$scope.orgs = orgs;

		if ($routeParams.userid != null) {
			$scope.adding = false;
			console.log("Setting user");
			bookingData.getBookings
			userData.getUser($routeParams.userid).$promise.then(function(user) {
				$scope.title = "Updating " + user.FirstName + ' ' + user.LastName;

				$scope.user = user;
				//$scope.user.O  ganisation = $scope.user.Organisation.OrganisationName;
				$scope.user.Type = $scope.userTypes[$scope.user.Type];
			})

		} else if ($routeParams.userName != null) {
			$scope.title = "Adding new user";
			$scope.adding = true;
			$scope.user = {};
			$scope.user.FirstName = $scope.getName(0);
			$scope.user.LastName = $scope.getName(1);
		}


	});

	$scope.getName = function(index) {
		var name = $routeParams.userName;
		return name.split(' ')[index];
	}

	//submit function
	$scope.submit = function() {
		//console.log("Organisation_Id: " + $scope.user.Organisation.Organisation_Id);
		
		if (typeof $scope.user.Organisation === 'undefined') {
		  var error = getError(-2);
		  if(error != null) {
		    alert(error);
		    return;
		}
		}
	  	if (typeof $scope.user.Type === 'undefined') {
		  var error = getError(-3);
		  if(error != null) {
		    alert(error);
		    return;
		}
		}
		if(typeof $scope.user.VUWId === 'undefined'){
		  var error = getError(-4);
		  if(error != null) {
		    alert(error);
		    return;
		}
		}
	  
		$scope.user.Type = $scope.userTypes.indexOf($scope.user.Type);

	if($scope.adding) {
		userData.addUser($scope.user).$promise.then(function(user) {	  
		  	var error = getError(user.VUWId);
		  	if(error != null) {
		    	alert(error);
		    	return;
			}
		  
			//console.log(user + " " + user.User_Id);
			$location.url("addBooking/" + user.User_Id)
		});
	}
	else
	{

		userData.updateUser($scope.user).$promise.then(function() {	  
		  	var error = getError($scope.user.VUWId);
		  	if(error != null) {
		    	alert(error);
		    	return;
			}
		  
			//console.log(user + " " + user.User_Id);
			$location.url("profile/" + $scope.user.User_Id)
		});

	}
	}
	$scope.cancel = function() {
		$location.url('/');
	}
	$scope.reversed = false;

	$scope.reverse = function() {
		if (!$scope.reversed && $scope.user.LastName == '') {
			$scope.user.LastName = $scope.user.FirstName;
			$scope.user.FirstName = "";
			$scope.reversed = true;
		}

	}


});