

rumBukkaApp.controller('roomTimelineController', function ($scope, $route, $location, $window, $rootScope) {

 var chart1 = {};
 $scope.chart = chart1;
    chart.type = "Timeline";
  
    chart.data.addColumn({type: 'string', id:'Room User'});
    chart.data.addColumn({type: 'date', id:'start'});
    chart.data.addColumn({type: 'date', id:'end'});

    chart.addRows([
      ['Jingles',new Data(2014,4,25),new Date(2015,4,25)],
      ['Jangles',new Data(2014,5,20),new Date(2015,5,20)],
      ['Jungles',new Data(2014,3,15),new Date(2015,3,15)]
      ]);

        chart.options = {
        displayExactValues: true,
        width: 400,
        height: 200,
        is3D: true,
        chartArea: {left:10,top:10,bottom:0,height:"100%"}
    }


  
  /*  chart1.data = [
       ['Component', 70,140],
       ['Software', 50, 100],
       ['Hardware', 80, 90]
      ];
    chart1.data.push(['Services',20000]);
    chart1.options = {
        displayExactValues: true,
        width: 400,
        height: 200,
        is3D: true,
        chartArea: {left:10,top:10,bottom:0,height:"100%"}
    };

    chart1.formatters = {
      number : [{
        columnNum: 1,
        pattern: "$ #,##0.00"
      }]
    };

    $scope.chart = chart1;

    $scope.aa=1*$scope.chart.data[1][1];
    $scope.bb=1*$scope.chart.data[2][1];
    $scope.cc=1*$scope.chart.data[3][1];*/

 
});
