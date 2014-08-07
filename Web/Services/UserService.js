rumBukkaApp.factory('userData', function($resource, $q){
	var connection = $resource('http://localhost:8081/api/users', {}, {
		get: {
			method: 'GET',
			isArray: true

		}

	});
	return {
		getUsers: function(){
		      return connection.get();
		}

	}

});