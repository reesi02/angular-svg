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
		var corners = "";
		for ( var i = 0; i < $scope.points.length; i++){
			var point = $scope.points[i];
			if ( i == 0){
				svg += "M"+point.x + " " + point.y + " ";
			}else{
				svg += "L"+point.x + " " + point.y +" ";
			}
			// add a clickable node at each corner of the square	
			var clickableNode = $scope.createClickableNode(point.x,point.y,$scope.clickCallback);
			corners +=clickableNode;	
			corners += " ";
		}
		svg+="z";
		$scope.paths = [];
		$scope.paths.push(svg);
		$scope.paths.push(corners);
		
		
	};
	
	$scope.createClickableNode = function(x,y,callback){
		// create a red box a few pixels outside the x,y point
		var size = 4;
		var svg="";
			svg += 	"M"+(x-size)+ " " + (y-size) + " ";
			svg+=	"L"+(x+size)+ " " + (y-size) + " ";
			svg+=   "L"+(x+size)+ " " + (y+size) + " ";
			svg+= 	"L"+(x-size)+ " " + (y+size) + " Z";
		return svg;
	};
	
	$scope.clickCallback = function(){
		console.log("click callback called");
	};
	
	
	$scope.pointsToPaths();
}]);