var HeaderCtrl = function($state,$rootScope, $http){
    var that= this ;
   
	
	function logOut(){
		$state.go('login');
	}
	
	angular.extend(this, {
		logOut : logOut,
	});
   
}

angular
	.module('angular-mini')
	.controller('HeaderCtrl', HeaderCtrl);
