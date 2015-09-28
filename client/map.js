
var app = angular.module("svg");

app.controller("mapCtrl",["$scope",function($scope){

  point = [ {lat:51.549484, long:-0.478306},
            {lat:51.548343, long:-0.477346},
            {lat:51.548883, long:-0.476155},
            {lat:51.549934, long:-0.477073}];

  //51.549484, -0.478306
  //51.548343, -0.477346
  //51.548883, -0.476155
  //51.549934, -0.477073

  // figure out the range of the values
  // max and min on each axis,

  var maxLat = 0;
  var minLat = 0;
  var maxLong = 0;
  var minLong = 0;
  var bFirst = true;

  for ( var i=0; i<point.length; i++){
    if ( i == 0){
      maxLat = minLat = point[i].lat;
      maxLong = minLong = point[i].long;
    }else{
      if (point[i].lat > maxLat){
        maxLat = point[i].lat;
      }
      if ( point[i].lat < minLat){
        minLat = point[i].lat;
      }

      if ( point[i].long > maxLong){
        maxLong = point[i].long;
      }
      if ( point[i].long < minLong){
        minLong = point[i].long;
      }
    }
  }

  console.log("Max and Min ranges:");
  console.log("Lat Max  : "+maxLat);
  console.log("Lat Min  : "+minLat);
  console.log("Long Max : "+maxLong);
  console.log("Long Min : "+minLong);

}]);
