
rumBukkaApp.factory('userData', function($resource, $q){
	var connection = $resource('/api/users/:id', {}, {
		get: {
			method: 'GET',
			isArray: true

		},
		post: {
		  method: 'POST'
		  
		},
		remove: {
		  method: 'DELETE'
		  
		}

	});
	
	return {
		getUsers: function(){
		      return connection.get();
		},
		addUser: function(user){
		  connection.post(user);
		  
		},
		deleteUser: function(user){
		  connection.delete({id:user});
		}

	};
});
