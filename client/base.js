var app = angular.module("svg");

app.controller("baseCtrl",["$scope",function($scope){
	$scope.message = "controller init message";
	
	$scope.graph = {'width':265,'height':134};
	
	$scope.circles =[];
	var c1 = {x:100,y:100,r:20};
	$scope.circles.push(c1);
	
	$scope.paths = [];
	
	$scope.addpath=function(){
	$scope.paths.push("M150 0 L75 200 L225 200 Z");
	};
	
}]);