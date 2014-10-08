rumBukkaApp.controller('personController', function($routeParams, $scope, $filter, ngTableParams, userData, $location) {
	if ($routeParams.confirm != null) {
		$scope.confirm = true;
		setTimeout(function() {
			//
			$scope.$apply(function() {
				$scope.confirm = false;

			});
			//alert('herro');
		}, 5000);
	}
	$scope.users = userData.getUsers();
	$scope.redirect = function(type, user) {
		if (type == 'add') {
			var name = $scope.input;
			$location.url(name == null ? "addPerson/name/userid" : "addPerson/name/" + name + "/userid");
		} else if (type == 'addBooking') {
			$location.url("addBooking/" + user.User_Id);
		} else if (type == 'modify') {
			$location.url("modifyBooking/" + user.User_Id);
		} else if (type == 'edit') {
			$location.url("addPerson/name/userid/" + user.User_Id);
		}
	}

	$scope.select = function(){
		console.log("CLIKED");
	}
});



//Comment