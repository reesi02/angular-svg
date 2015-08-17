var app = angular.module("svg");

app.controller("baseCtrl",["$scope","$timeout",function($scope,$timeout){
	$scope.message = "controller init message";
	
	$scope.size = {'width':265,'height':400};
	
	$scope.circles =[];
	var c1 = {x:100,y:100,r:20};
	$scope.circles.push(c1);
	
	$scope.paths = [];
	
	$scope.addpath=function(){
		$scope.paths.push("M150 0 L75 200 L225 200 Z");
	};
	
	$scope.populateGraph = function(offset){
		$scope.graph = "M0 100 ";
		for ( i = 0 ; i < 2*Math.PI; i=i+Math.PI/16){
			var y = Math.sin(i+offset);
			var x = (i/(2*Math.PI))*100
			
			$scope.graph += "L "+x+" "+(100-(y*100)) + " ";
		}
		$scope.paths = [];
		$scope.paths.push($scope.graph);
	};
	$scope.offset = 0;
	$scope.moveGraph = function(){
		$scope.offset= $scope.offset + (Math.PI/16);
		$scope.populateGraph($scope.offset);
		$timeout($scope.moveGraph,60);
	};
	$timeout($scope.moveGraph,60);
}]);