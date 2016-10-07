angular.module('myApp').controller("detailCtrl", function($scope, mainService, $stateParams) {

mainService.getOneProduct($stateParams.id).then(function(response) {
   $scope.single = response.data;
})

})
