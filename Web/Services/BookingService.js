rumBukkaApp.factory('bookingData', function($resource, $q){
	var connection = $resource('/api/bookings', {}, {
		get: {
			method: 'GET',
			isArray: true

		},
		post: {
		  method: 'POST'
		  
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
		  
		}

	}

}); 
