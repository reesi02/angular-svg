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
		var svg = {};
		svg.path = "";
		svg.click = "";
		var corners = [];
		for ( var i = 0; i < $scope.points.length; i++){
			var point = $scope.points[i];
			if ( i == 0){
				svg.path += "M"+point.x + " " + point.y + " ";
			}else{
				svg.path += "L"+point.x + " " + point.y +" ";
			}
			// add a clickable node at each corner of the square	
			var clickableNode = $scope.createClickableNode(point.x,point.y,"clickCallback()");
			corners.push(clickableNode);	
			
		}
		svg.path += "z";
		$scope.paths = [];
		$scope.paths.push(svg);
		
		for ( var i = 0; i< corners.length; i++){
			$scope.paths.push(corners[i]);
		}
		
		
	};
	
	$scope.createClickableNode = function(x,y,callback){
		// create a red box a few pixels outside the x,y point
		var size = 4;
		var svg={};
			svg.path="";
			svg.path += "M"+(x-size)+ " " + (y-size) + " ";
			svg.path +=	"L"+(x+size)+ " " + (y-size) + " ";
			svg.path += "L"+(x+size)+ " " + (y+size) + " ";
			svg.path += "L"+(x-size)+ " " + (y+size) + " Z";
		svg.click = callback;
		return svg;
	};
	
	$scope.clickCallback = function(){
		console.log("click callback called");
	};
	
	
	$scope.pointsToPaths();
}]);