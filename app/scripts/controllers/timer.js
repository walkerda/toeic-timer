'use strict';

/**
 * @ngdoc function
 * @name toeicTimerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toeicTimerApp
 */
angular.module('toeicTimerApp')
  .controller('TimerCtrl', function ($scope) {
        $scope.timerText = "00:00";
        if (parts.name === "part5") {
            $scope.timerText = parts.timerDuration;
        }
  });
