'use strict';

/**
 * @ngdoc overview
 * @name seccamApp
 * @description
 * # seccamApp
 *
 * Main module of the application.
 */
angular
  .module('seccamApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/live-stream', {
        templateUrl: 'views/live-stream.html',
        controller: 'LiveStreamCtrl'
      })
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('BaseController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(someUrl) {
      return someUrl === $location.url();
    };
  }]);
