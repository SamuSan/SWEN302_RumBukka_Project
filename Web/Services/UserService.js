
rumBukkaApp.factory('userData', function($resource, $q){
	var connection = $resource('/api/users', {}, {
		get: {
			method: 'GET',
			isArray: true

		},
		post: {
		  method: 'POST'
		  
		}

	});
	
	return {
		getUsers: function(){
	      	return connection.get();
		},
		addUser: function(user){
			return  connection.post(user);
		  
		}

	};
});
