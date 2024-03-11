angular.module('myApp').controller('WriteController', function($scope, $location, boardService) {

  $scope.categoryItem = '전체'; // 초기값 설정

  $scope.write = function(title, content) {

    boardService.newContent(title, content, $scope.categoryItem, 'Admin')

    $location.path("/home")

  }

  
  $scope.categoryItems = boardService.getCategory();


})