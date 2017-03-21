function PrincipalInfofactory($http) {
    var PrincipalInfofactory = {};
    PrincipalInfofactory.loginData = null;
    PrincipalInfofactory.setPrincipal = function (data) {
        PrincipalInfofactory.loginData = data;
    }
    PrincipalInfofactory.resetPrincipal = function (data) {
        PrincipalInfofactory.loginData = null;
    }
    PrincipalInfofactory.getloginData = function () {
        if (PrincipalInfofactory.loginData == undefined || PrincipalInfofactory.loginData == null) {
            var data = PrincipalInfofactory.getPrincipalObject();
            if (data != undefined) {
                PrincipalInfofactory.setPrincipal(data);
                return PrincipalInfofactory.loginData;
            }
        }
        else {
            if (PrincipalInfofactory.loginData != undefined && PrincipalInfofactory.loginData != null) {
                return PrincipalInfofactory.loginData;
            }
        }
    }
    PrincipalInfofactory.getPrincipalObject = function () {
        return PrincipalInfofactory.loginData;
    }
    return PrincipalInfofactory;
}
angular.module('angular-mini').factory('PrincipalInfofactory', PrincipalInfofactory);