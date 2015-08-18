// box.js

var app = angular.module("svg");

app.controller("boxCtrl",["$scope",function($scope){
	$scope.svg = {height:200,width:200};
	
	$scope.points = [{x:10,y:10},
					 {x:190,y:10},
					 {x:190,y:190},
					 {x:10,y:190}];
					 
	$scope.pointsToPaths = function(){
		// take the points and plot them on the svg canvas
		var svg = "";
		for ( var i = 0; i < $scope.points.length; i++){
			var point = $scope.points[i];
			if ( i == 0){
				svg += "M"+point.x + " " + point.y + " ";
			}else{
				svg += "L"+point.x + " " + point.y +" ";
			}
				
		}
		svg+="z";
		$scope.paths = [];
		$scope.paths.push(svg);
	}
	
	$scope.pointsToPaths();
}]);