

rumBukkaApp.controller('roomTimelineController', function ($scope, $route, $location, $window, $rootScope) {
  google.load('visualization', '1', {packages:['timeline']});
  google.setOnLoadCallback(function () {
      angular.bootstrap(document.body, ['rumBukkaApp']);
      $scope.loadChart();
  });

$scope.loadChart = function(){
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

 var options = {
          title: 'Company Performance'
        };

        var chart = {};
        chart.data = data;
        chart.options = options;

        $scope.chartTypes = [
                    { typeName: 'TimeLine', typeValue: '1' }
        ];

          $scope.selectType = function (type) {
                  $scope.chart.type = type.typeValue;
              $scope.chart.typeName = type.typeName;
          }

        chart.type = $scope.chartTypes[0].typeValue;
        chart.typeName = $scope.chartTypes[0].typeName;
        $scope.chartType = $scope.chartTypes[0];
  
        $scope.chart = chart;
    };
  });