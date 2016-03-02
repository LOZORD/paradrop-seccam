'use strict';

/**
 * @ngdoc function
 * @name seccamApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the seccamApp
 */
angular.module('seccamApp')
  .controller('PhotosCtrl', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    $scope.photos = [];

    var PHOTO_SERVER_URL = 'http://localhost:8010';
    var INTERVAL_TIME = 1000 * 60 * 1; // one minute
    var stopTime = null;

    var getPhotos = function() {
      $http.get(PHOTO_SERVER_URL).then(function(payload) {
        //console.log('payload', payload);
        $scope.photos = payload.data;
      });
    };

    getPhotos();

    stopTime = $interval(getPhotos, INTERVAL_TIME);
  }]);
