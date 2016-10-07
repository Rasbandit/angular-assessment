angular.module('myApp').service('mainService', function ($http) {
   var shortUrl = 'http://practiceapi.devmounta.in/products';

   this.getProducts = function() {
      return $http({
         method: "GET",
         url: shortUrl
      })
   }
})
