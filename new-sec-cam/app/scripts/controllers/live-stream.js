'use strict';

/**
 * @ngdoc function
 * @name seccamApp.controller:LiveStreamCtrl
 * @description
 * # LiveStreamCtrl
 * Controller of the seccamApp
 */
angular.module('seccamApp')
.controller('LiveStreamCtrl', ['$scope', function ($scope) {
  $scope.streamStarted = false;

  var address = 'http://admin@192.168.128.99/video.cgi';

  $scope.startStream = function() {
    if ($scope.streamStarted) {
      return;
    } else {
      $scope.streamStarted = true;
      $('#video-stream').attr('src', address);
    }
  };
}]);
