rumBukkaApp.controller('modifyBookingController', function ($scope, $route, $location, $window, $rootScope) {


        $scope.Profiles = [{},
      {fname:'Jimmy',lname:'Smitts',sid:'001',stype: "001",Org: "001",ph:"111"},
      {fname:'Sam', lname:'Wise',sid:'004',stype: "001",Org: "001",ph:"111"},
      {fname:'Ben', lname:'Chang',sid:'002',stype: "001",Org: "001",ph:"111"},
      {fname:'Crystal',lname:'Meth', sid:'003',stype: "001",Org: "001",ph:"111"},
      {fname:'Daygen',lname:'NiteStart', sid:'005',stype: "001",Org: "001",ph:"111"},
      {fname:'Mike',lname:'OnYourBike', sid:'006',stype: "001",Org: "001",ph:"111"}
    ];

    $scope.Bookings = [{},
      {Booking_Id:'111',startDate:'01/01/70',endDate:'01/01/71',Room_Room_Id: "001"},
    {Booking_Id:'112',startDate:'01/01/70',endDate:'01/01/71',Room_Room_Id: "001"},
    {Booking_Id:'113',startDate:'01/01/70',endDate:'01/01/71',Room_Room_Id: "001"},
    {Booking_Id:'114',startDate:'01/01/70',endDate:'01/01/71',Room_Room_Id: "001"},
    {Booking_Id:'115',startDate:'01/01/70',endDate:'01/01/71',Room_Room_Id: "001"},
    ];

    $scope.currentProfile = $scope.Profiles[0];
        $scope.addBook = {
        "FirstName": "",
        "LastName": "",
        "VUWStudentId": "",
        "Type": "",
        "Phone_Phone_Id": "",
        "Organisation_Organisation_Id": "",
        };

    $scope.currentBooking = $scope.Bookings[0];
        $scope.findBookings = {
        "Booking_Id": "",
        "startDate": "",
        "endDate": "",
        "Room_Room_Id": "",
        };

    $scope.input1;    
 $scope.idSearch = function(){
//search by id


}   

$scope.submit = function(){
//push adduser
console.log("pro "+$scope.addBook.FirstName);

}
$scope.select = function(){
$scope.booking =$scope.Bookings;
		console.log($scope.currentProfile.fname);
		var currentProfile = $scope.currentProfile;

        var addBook =$scope.addBook;

        addBook.FirstName = currentProfile.fname;
        addBook.LastName = currentProfile.lname;
        addBook.VUWStudentId = currentProfile.sid;
        addBook.Type = currentProfile.stype;
        addBook.Phone_Phone_Id = currentProfile.ph;
        addBook.Organisation_Organisation_Id = currentProfile.Org;


}

$scope.selectBking = function(){

        //var currentBooking = $scope.currentBooking;

        var findBookings =$scope.findBookings;

        findBookings.Booking_Id = currentBooking.Booking_Id;
        findBookings.startDate = currentBooking.startDate;
        findBookings.endDate = currentBooking.endDate;
        findBookings.Room_Room_Id= currentBooking.Room_Room_Id;


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