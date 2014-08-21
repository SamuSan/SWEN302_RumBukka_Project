

rumBukkaApp.controller('roomTimelineController', function ($scope, $route, $location, $window, $rootScope) {
  console.log("in controller");
  //google.load("visualization", "1", {packages: ["timeline"]});

  //$scope.ready = (google.visualization.Timeline || false);

  $scope.loadChart = function(){
    console.log("load chart");
    var datab = new google.visualization.DataTable();

    datab.addColumn({ type: 'string', id: 'President' });
    datab.addColumn({ type: 'date', id: 'Start' });
    datab.addColumn({ type: 'date', id: 'End' });

    datab.addRows([
    [ 'Sam Minns', new Date(2014, 3, 29), new Date(2016, 3, 29) ],
    [ 'James Watkins', new Date(2014, 1, 30),  new Date(2016, 2, 3) ],
    [ 'Box Widehole',  new Date(2014, 5, 13),  new Date(2016, 2, 3) ],
    [ 'Michael Rimmer',new Date(2014, 2, 3),  new Date(2016, 6, 3) ]]
    );

    var container = document.getElementById('timeline');

    var chart = new google.visualization.Timeline(container);

    chart.draw(datab);
  };
  
  
  $scope.loadChart();
  console.log("in the call back");

});