angular.module('myApp').controller('ContentController', function($scope, $routeParams,$location, boardService) {
  
  $scope.id = $routeParams.id;

  $scope.getContentData = function(id) {
    $scope.contentInfo = boardService.getContent(id)
  }

  $scope.getContentData($scope.id)

  $scope.delete = function(id){
    boardService.deleteContent(id);
    $location.path('/home')
  }

});