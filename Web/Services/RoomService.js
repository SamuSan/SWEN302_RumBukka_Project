rumBukkaApp.factory('roomData', function($resource, $q){
	var connection = $resource('/api/rooms/:id', {}, {
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
		getRooms: function(){
		      return connection.get();
		},
		addRoom: function(room){
		  connection.post(room);
		  
		},
		deleteRoom: function(room){
		  connection.delete({id:room});
		}

	}

});