var app = angular.module("svg",["ngRoute"]);
app.config(["$routeProvider",
		function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:'base.html',
		controller:'baseCtrl'
	})
	.when("/other",{
		templateUrl:"other.html",
		controller:'otherCtrl'
	})
	.otherwise({redirect:'/'});
}]);


