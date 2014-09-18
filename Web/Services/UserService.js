rumBukkaApp.factory('userData', function($resource, $q) {
	var connection = $resource('/api/users/:id', {}, {
		get: {
			method: 'GET',
			isArray: true

		},
		getSingle: {
			method: 'GET'
		},
		post: {
			method: 'POST'

		},
		remove: {
			method: 'DELETE'

		}

	});

	return {
		getUsers: function() {
			return connection.get();
		},
		getUser: function(userId) {
			return connection.getSingle({
				id: userId
			});
		},
		addUser: function(user) {
			 return connection.post(user);

		},
		deleteUser: function(user) {
			connection.delete({
				id: user
			});
		}

	};
});