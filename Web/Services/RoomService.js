rumBukkaApp.factory('roomData', function($resource, $q){
	var connection = $resource('/api/rooms/:id', {}, {
		get: {
			method: 'GET',
			isArray: true

		},
		getsingle: {
			method: 'GET',

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
		getRoom: function(room){
		      return connection.getsingle({id:room});
		},
		addRoom: function(room){
		  connection.post(room);
		  
		},
		deleteRoom: function(room){
		  connection.delete({id:room});
		}

	}

});