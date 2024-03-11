// controllers/HomeController.js

app.controller('HomeController', function($scope, $location, boardService) {

  $scope.categoryItem = "전체"


  $scope.writePage = function() {
    $location.path('/home');
  }

  $scope.getBoardData = function(selectCategory) {
    $scope.categoryItem = selectCategory
    $scope.dummyData = boardService.getData(selectCategory)
  }

  $scope.contentInfo = function(id) {
    $location.path('/content/' + id);
  }


  $scope.categoryItems = boardService.getCategory();



  $scope.getBoardData($scope.categoryItem);

});
