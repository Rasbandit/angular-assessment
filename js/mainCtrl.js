angular.module('myApp').controller("mainCtrl", function($scope, mainService, $stateParams) {

   mainService.getProducts().then(function(response) {
         $scope.products = response.data;
   })

})
