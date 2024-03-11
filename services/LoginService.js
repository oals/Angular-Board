angular.module('myApp').factory('loginStorage', ['$http', '$timeout', function($http, $timeout) {

  var loginService = {};
  loginService.isLoggedIn = false;

  loginService.userLogin = function(memberId, memberPswd) {
    // const ToSendLoginData = { "memberId": memberId, "memberPswd": memberPswd };

    // return $http.post('http://localhost:8102/login', ToSendLoginData)
    //   .then(function(response) {
    //     return $timeout(function() {
    //       if (response.data === true) {
    //         alert("로그인 성공")
    //         loginService.isLoggedIn = true;

    //         return true;
    //       } else {
    //         loginService.isLoggedIn = false;
    //         return false;
    //       }
    //     });
    //   })
    //   .catch(function(error) {
    //     console.error('서버 요청 실패:', error);
    //     return false;
    //   });

    loginService.isLoggedIn = true;

    return true;

  };



  return loginService;
}]);
