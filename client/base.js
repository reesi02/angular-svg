var app = angular.module("svg");

app.controller("baseCtrl",["$scope","$timeout",function($scope,$timeout){
	$scope.message = "controller init message";
	
	$scope.colours=["red","yellow","green","blue"];
	// default colours
	$scope.colour="red";
	
	$scope.size = {'width':265,'height':400};
	
	$scope.circles =[];
	var c1 = {x:100,y:100,r:20};
	$scope.circles.push(c1);
	
	$scope.paths = [];
	
	$scope.addpath=function(){
		$scope.paths.push("M150 0 L75 200 L225 200 Z");
	};
	
	$scope.populateGraph = function(offset){
		
		$scope.graph = "";
		for ( i = 0 ; i < 2*Math.PI; i=i+Math.PI/16){
			var y = 100-(Math.sin(i+offset)*100);
			var x = (i/(2*Math.PI))*100
			
			if ( x == 0 ){
				$scope.graph="M"+x+" "+y+" ";
			}else{
				$scope.graph += "L"+x+" "+y + " ";
			}
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