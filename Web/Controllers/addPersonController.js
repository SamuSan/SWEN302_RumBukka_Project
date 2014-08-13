//rumBukkaApp = angular.module('rumBukkaApp',['ngRoute'],["ngQuickDate"]);

rumBukkaApp.controller('addPersonController', function ($scope, $route, $location, $window, $rootScope) {

     $scope.departs = ["Engineering and Computer Science", "Science", "Maths", "Bachelor of arts/working at mcdonalds"];
     $scope.defaultDep = $scope.departs[0];
     $scope.newUser = {
        "FirstName": "",
        "LastName": "",
        "VUWStudentId": "",
        "Type": "",
        "Phone_Phone_Id": "",
        "Organisation_Organisation_Id": "",
        "startDate":"",
        "endDate": "",
    };

        //submit function
    $scope.submit = function(){
        var newUser = $scope.newUser;
        $scope.addUser = {
        "FirstName": "",
        "LastName": "",
        "VUWStudentId": "",
        "Type": "",
        "Phone_Phone_Id": "",
        "Organisation_Organisation_Id": "",
        "startDate":"",
        "endDate": "",
        };
        var addUser =$scope.addUser;
        addUser.FirstName = newUser.FirstName;
        addUser.LastName = newUser.LastName;
        addUser.VUWStudentId = newUser.VUWStudentId;
        addUser.Type = newUser.Type;
        addUser.Phone_Phone_Id = newUser.Phone_Phone_Id;
        addUser.Organisation_Organisation_Id = newUser.Organisation_Organisation_Id;
        addUser.startDate = newUser.startDate;
        addUser.endDate = newUser.endDate;
    }

 

});



angular.module('rumBukkaApp')
    .directive('myDateinput', function () {
    var time_formatters = ['h', 'H', 'hh', 'HH', 'm', 'mm', 's', 'ss'];
    return {
        require: 'ngModel',

        link: function (scope, element, attrs, ctrl) {
            var input_element = element[0];
            var date_options = {
                field: input_element,
                format: attrs.myDateinput ? attrs.myDateinput : 'MMM D YYYY'
            };

            // Use the format to determine if we want time
            for (var i in time_formatters) {
                if (date_options.format.indexOf(time_formatters[i]) !== -1) {
                    date_options.showTime = true;
                    if (date_options.format.indexOf('s') !== -1 || date_options.format.indexOf('ss') !== -1) {
                        date_options.showSeconds = true;
                    }
                    break;
                }
            }

            // Wire up controller
            date_options.onSelect = function (selected_date) {
                scope.$apply(function () {
                    ctrl.$setViewValue(selected_date);
                });
            };
            scope.picker = new Pikaday(date_options);

            // Add some validation
            ctrl.$parsers.unshift(function (viewValue) {
                // Blank or an actual Date (from Pikaday) is valid
                if (viewValue === '' || viewValue === undefined || viewValue instanceof Date) {
                    ctrl.$setValidity('date', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('date', false);
                    return undefined;
                }
            });

        }
    };
});
