angular.module('myApp',[]).
controller('myController', function ($scope){
  $scope.h = 'hello';

  $scope.currencies = [100,88,76,90,124, 'Hello'];
}).
filter('customCurrency', function (){
  return function (currency, symbol){
      if(isNaN(currency)){
        return currency;
      }
      else{
          var currencySymbol = symbol || "$";
           return currencySymbol + currency;

      }
  };
});
