'use strict';

angular.module('anaximander', [
    'ngAnimate', 
    'ngCookies', 
    'ngTouch', 
    'ngSanitize', 
    'ngResource', 
    'ui.router', 
    'ui.bootstrap',
    'firebase'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
