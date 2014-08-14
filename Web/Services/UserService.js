
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

	};
});
