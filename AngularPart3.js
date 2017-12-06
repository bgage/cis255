var json = [
              {"zip": "48710", "city": "university center", "state": "MI"},
              {"zip": "48631", "city": "kawkawlin", "state": "MI"},
              {"zip": "48641", "city": "midland", "state": "MI"}
            ]
var app = angular.module('app', []);

app.controller('userCtrl', function($scope) {
  $scope.city = "enter your zip code";
  $scope.state = "enter your zip code";
  $scope.user= [{
    fName: "Derek",
    lName: "Banas",
    phoneNumber: "(989)565-5656",
    email: "hello@gmail.com",
    zip: "48631",
    city: "kawkawlin",
    state: "MI"

  }];

  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, phoneNumber: userInfo.phone, email: userInfo.email, zip: userInfo.zip, city: userInfo.city, state: userInfo.state
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }

 $scope.getCityState = function() {
   var findzip = $scope.userInfo["zip"];
   for(o in json){
     console.log(o);
     if (json[o]["zip"] == findzip){
       $scope.city = json[o]["city"];
       console.log(json[o]["city"]);
       $scope.state = json[o]["state"];
     }
   }
 }

});
