rumBukkaApp.controller('roomListController', function ($scope, $filter, ngTableParams) {

    var data =    $scope.colors = [
      {name:'black', shade:'dark'},
      {name:'white', shade:'light'},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark'},
      {name:'yellow', shade:'light'}
    ];
    $scope.route = data;

    $scope.tableParamsRoute = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            company: 'asc'     // initial sorting
        }
    }, {
        total: route.length, // length of route
        getData: function ($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                $filter('orderBy')(route, params.orderBy()) :
                route;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
});
