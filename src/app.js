angular.module('angular-mini', [
    'ui.router'
    , 'oc.lazyLoad'
    , 'ngAria'
    , 'ngAnimate'
    , 'ngMessages'
    , 'ngMaterial'
    , 'toastr'
    , 'datatables'
   ]).config(function (toastrConfig, $ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
    angular.extend(toastrConfig, {
        allowHtml: false
        , closeButton: true
        , closeHtml: '<button>&times;</button>'
        , extendedTimeOut: 1000
        , iconClasses: {
            error: 'toast-error'
            , info: 'toast-info'
            , success: 'toast-success'
            , warning: 'toast-warning'
        }
        , messageClass: 'toast-message'
        , onHidden: null
        , onShown: null
        , onTap: null
        , progressBar: false
        , tapToDismiss: true
        , templates: {
            toast: 'directives/toast/toast.html'
            , progressbar: 'directives/progressbar/progressbar.html'
        }
        , preventDuplicates: false
        , preventOpenDuplicates: true
        , timeOut: 5000
        , titleClass: 'toast-title'
        , toastClass: 'toast'
    });
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('login', {
        url: '/login'
        , templateUrl: 'src/app/Login/login.html'
        , controller: 'loginCtrl'
        , controllerAs: 'loginCtrl'
        , resolve: {
            dependancies: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                        'src/app/Custom Factories/PrincipalInfoFactory.js'
                        , 'src/app/Login/loginFactory.js'
                        , 'src/app/Login/loginCtrl.js'
                    ]);
            }
        }
    });
});
angular.module('angular-mini').run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error, $http) {
        event.preventDefault();
    });
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {});
});