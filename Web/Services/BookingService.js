rumBukkaApp.factory('bookingData', function($resource, $q){
	var connection = $resource('/api/bookings/:id', {}, {
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
		  
		},
		update: {
		  method: 'PUT'
		}

	});
	return {
		getBookings: function(){
		      return connection.get();
		},
		getBooking: function(userid){
		      return connection.getSingle({id:userid});
		},
		addBooking: function(booking){
		  return connection.post(booking);
		  
		},
		deleteBooking: function(booking){
		  return connection.delete({id:booking});
		},
		updateBooking: function(booking){
		 connection.update(booking);
		},
		newBooking: {}

	}

}); 
