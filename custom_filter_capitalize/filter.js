var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
  $scope.names = ['edison', 'kyle', 'frank', 'grant', 'cole'];
});

myApp.filter('capitalize', function(){
  return function (str){
    if(isNaN(str)){
        var upperCase = str.charAt(0).toUpperCase();
        var rest = str.slice(1,str.length);
        var newStr = upperCase + rest;
        // console.log(newStr);
        return newStr;
    }
    else{
      return str;
    }
  };
});
