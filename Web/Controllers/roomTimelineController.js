
rumBukkaApp.controller('roomTimelineController', function ($scope, $route, $location, $window, $rootScope) {
console.log("in controller");
//google.load("visualization", "1", {packages: ["timeline"]});

//$scope.ready = (google.visualization.Timeline || false);
$scope.message = '';
$scope.loadChart = function(){
console.log("load chart");
$scope.datab = new google.visualization.DataTable();

$scope.datab.addColumn({ type: 'string', id: 'Person' });
$scope.datab.addColumn({ type: 'date', id: 'Start' });
$scope.datab.addColumn({ type: 'date', id: 'End' });

$scope.datab.addRows([
  [ 'Sam Minns', new Date(2014, 3, 29), new Date(2016, 3, 29) ],
  [ 'Sam Minns', new Date(2016, 6, 29), new Date(2016, 12, 29) ],
  [ 'James Watkins', new Date(2014, 1, 30),  new Date(2016, 2, 3) ],
  [ 'Michael Rimmer',new Date(2014, 2, 3),  new Date(2016, 6, 3) ]

]);

var container = document.getElementById('timeline');

$scope.chart = new google.visualization.Timeline(container);

google.visualization.events.addListener($scope.chart, 'select', function(){
  var selectedItem = $scope.chart.getSelection().bb;
  var value = $scope.datab.getValue(selectedItem, 0);
  $scope.message = 'The user selected ' + value;

});
$scope.chart.draw($scope.datab);
};

$scope.loadChart();
console.log("in the call back");

});