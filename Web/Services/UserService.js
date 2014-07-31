rumBukkaApp.factory('userData', function($resource, $q){
	var connection = $resource('/Users', {}, {
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