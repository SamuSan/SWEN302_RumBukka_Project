<<<<<<< HEAD
rumBukkaApp.factory('userData', function($resource, $q){
	var connection = $resource('/api/users', {}, {
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

=======
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

>>>>>>> 3101e2e69186d73bb72467f5dbee42c26e402b65
});