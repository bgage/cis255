// ---------- AJAX CALL ----------
//var req = new XMLHttpRequest(); // create an ajax request
//var url = 'https://api.svsu.edu/courses?prefix=CS&term=17/FA';

//req.onreadystatechange = function() {
//	var readyStateDone = 4;
//	var readyStatusSuccess = 200;
//	if (this.readyState == readyStateDone &&
//		this.status == readyStatusSuccess) {
//		jsonObj = JSON.parse(this.responseText);
//	}
//};
//req.open('GET', url, true);
//req.send();

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
   }
  }
   // alert("woke up!");
}


var app = angular.module('app', []);

app.controller('coursesctrl', function($scope, $http){
var jsonObj;
$scope.getCourses = function(){
	var buildArray = [];
	var arr = [];
	var prefix = document.getElementById("prefix").value;
	prefix.toUpperCase();
		var address = 'https://api.svsu.edu/courses?prefix=' + prefix + '&term=17/FA';
		$http({
			method : "GET",
			url : address
		}).then(function mySuccess(response){
			$scope.courses = response.data.courses;

			//console.log(jsonObj);
		}, function myError(response) {
			$scope.success = response.statusText;
		});
}


  $scope.checkNumber = function(number){
    if (number % 2 == 0){
      return 'stripedblue';
    }
    else {
      return 'stripedbeige';
    }
  }

});
