rumBukkaApp.factory('bookingData', function($resource, $q){
	var connection = $resource('/api/bookings/:id', {}, {
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
		getBookings: function(){
		      return connection.get();
		},
		getBooking: function(userid){
		      return connection.get();
		},
		addBooking: function(booking){
		  connection.post(booking);
		  
		},
		deleteBooking: function(booking){
		  connection.delete({id:booking});
		}

	}

}); 
