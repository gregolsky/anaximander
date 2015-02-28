'use strict';

angular.module('anaximander', [
//    'ngAnimate', 
    'ngCookies', 
    'ngTouch', 
    'ngSanitize', 
//    'ngResource', 
    'ui.router', 
    'ui.bootstrap',
    'firebase',
    'angular-md5'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
      })
      .state('mapsCreate', {
        url: '/maps/create',
        templateUrl: 'app/map/create/create.html',
        controller: 'CreateMapCtrl',
        controllerAs: 'createMap'
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FIREBASE_URL', 'https://anaximander.firebaseio.com');
