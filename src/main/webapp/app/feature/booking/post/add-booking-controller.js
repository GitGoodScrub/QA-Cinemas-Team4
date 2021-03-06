(function() {

    var AddBookingController =  function($state, bookingDal) {
        var vm = this;

        vm.addBooking = function(bookingToAdd) {
            console.log("This is the value of movie to add " + bookingToAdd);
            console.log(bookingToAdd);
            var bookingToJson = JSON.stringify(bookingToAdd);
            console.log(bookingToJson);
            bookingDal.saveBooking(bookingToAdd).then(function (results) {
                vm.bookingAddMessage  = results;
                $state.go('getbooking');
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        };
    };

    angular.module('cinemaApp').controller('addBookingController', ['$state','bookingDal',AddBookingController]);
}());