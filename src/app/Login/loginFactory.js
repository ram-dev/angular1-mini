function LoginFactory($http, PrincipalInfofactory) {
	var LoginFactory = {};

	/*LoginFactory.authenticateUser = function(username,password) {
		return $http.get('login/login/'+username+'/'+password).then(function(response) {
		});
	};
	
	LoginFactory.getUsers = function(){
		return $http.get('user/getUsers').then(function(response){
			return response;
		});
	}*/
	
	return LoginFactory;
}
angular.module('angular-mini').factory('loginFactory', LoginFactory);