angular.module('myApp').directive('showProduct', function() {
   return {
      restrict: 'E',
      templateUrl: '../views/product-tmpl.html',
      scope: {
         item: '='
      }
   };

})
