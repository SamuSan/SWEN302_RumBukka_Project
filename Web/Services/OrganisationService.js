rumBukkaApp.factory('organisationData', function($resource, $q){
	var connection = $resource('/api/organisations', {}, {
		get: {
			method: 'GET',
			isArray: true

		}

	});
	return {
		getOrganisations: function(){
		      return connection.get();
		}

	}

});