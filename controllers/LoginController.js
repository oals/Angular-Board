// LoginController.js

angular.module('myApp').controller('LoginController', function($scope, $rootScope, $location, loginStorage) {

  $rootScope.isLoggedIn = loginStorage.isLoggedIn;


  $scope.$watch(function() {
    return loginStorage.isLoggedIn;
  }, function(newVal) {
    $rootScope.isLoggedIn = newVal;
  });


  $scope.logout = function() {
    loginStorage.isLoggedIn = false;
    $rootScope.isLoggedIn = false;

  }

  $scope.loginTry = function(memberId, memberPswd) {
    var loginChk = loginStorage.userLogin(memberId, memberPswd)

    if (loginChk) {
      alert("로그인 되었습니다.")
      $location.path('/home');
    } else {
      $scope.memberId = ""
      $scope.memberPswd = ""
    }

  };
});
