rumBukkaApp.factory('roomData', function($resource, $q){
	var connection = $resource('/api/rooms', {}, {
		get: {
			method: 'GET',
			isArray: true

		},
		post: {
		  method: 'POST'
		  
		}

	});
	return {
		getRooms: function(){
		      return connection.get();
		},
		addRoom: function(room){
		  connection.post(room);
		  
		}

	}

});