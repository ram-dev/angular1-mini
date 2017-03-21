function LoginCtrl($state, $timeout, $http, $rootScope, PrincipalInfofactory, $window, $location, toastr, loginFactory, $state) {
    function login(loginObj) {
        $state.go('timesheet');
    }

    angular.extend(this, {
        login: login
    });
}
angular.module('angular-mini').controller('loginCtrl', LoginCtrl);