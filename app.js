// app.js

var app = angular.module('myApp', ['ngRoute','ngMessages']);

app.config(function($routeProvider) {


  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })

    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/write', {
      templateUrl: 'views/write.html',
      controller: 'WriteController'
    })
    .when('/content/:id', {
      templateUrl: 'views/content.html',
      controller: 'ContentController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
