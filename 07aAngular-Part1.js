var app = angular.module('app', []);

app.controller("ctrlHypotenuse", function($scope){
  $scope.sideA = 1;
  $scope.sideB = 1;

  $scope.calculateC = function(){
    $scope.calculation = "sqrt( " + $scope.sideA + "^2 " + " + " + $scope.sideB + "^2) = "
    + Math.sqrt(Math.pow($scope.sideA, 2) + Math.pow($scope.sideB, 2));
  };
});

app.controller("ctrlcList", function($scope){
  $scope.aRandomCourse = function(id, length, courses){
    if(id == 1){
      $scope.randomcourse1 = courses[Math.floor(Math.random() * length)].item;
    }
    else if(id == 2){
      $scope.randomcourse2 = courses[Math.floor(Math.random() * length)].item;
    }
  }
});
