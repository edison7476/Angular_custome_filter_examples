var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope){
  $scope.h = "hello";
  $scope.numbers = [2,5,12,67,8,99,28,3,34,62,11,72,88];
});


/*
  *** Custom Filter Structure ***

// To declare a filter we pass in two parameters to app.filter

// The first parameter is the name of the filter
// second is a function that will return another function that does the actual work of the filter

app.filter('myFilter', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally

  return function(input, optional1, optional2) {
    var output;
    **** Do filter work here ****
    return output;
  }

});

*/

myApp.filter('ordinal', function (){
  return function (number){
    if(isNaN(number) || number < 1){
      return number;
    }
    else{
      var lastDigit = number % 10;
      if(lastDigit === 1) {
       return number + 'st';
     } else if(lastDigit === 2) {
       return number + 'nd';
     } else if (lastDigit === 3) {
       return number + 'rd';
     } else if (lastDigit > 3) {
       return number + 'th';
     }

    }
  };
});
