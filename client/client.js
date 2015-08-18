var app = angular.module("svg",["ngRoute"]);
app.config(["$routeProvider",
		function($routeProvider){
	$routeProvider.when("/sinWave",{
		templateUrl:'base.html',
		controller:'baseCtrl'
	})
	.when("/other",{
		templateUrl:"other.html",
		controller:'otherCtrl'
	})
	.otherwise({redirect:'/'});
}]);


