'use strict';

function PartsCtrl($scope) {
  $scope.parts = [
  {
    name: 'landing',
      questionNumbers: ['---'],
      timerDuration: 0,
      questionDuration: 0
  },
  {
    name: 'part 5',
    questionNumbers: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
    122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140],
    timerDuration: 15 * 60,
    questionDuration: 39
  },
  {
    name: 'part 6',
    questionNumbers: [141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152],
    timerDuration: 6 * 60,
    questionDuration: 54
  },
  {
    name: 'part 7',
    questionNumbers: [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173,
    174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197,
    198, 199, 200],
    timerDuration: 54 * 60,
    questionDuration: 55
  },
  {
    name: 'all parts',
    questionNumbers: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
    122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
    146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
    170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193,
    194, 195, 196, 197, 198, 199, 200],
    timerDuration: 75 * 60,
    questionDuration: 75.757575757576
  },
  {
    name: 'test part',
    questionNumbers: [1, 2, 3],
    timerDuration: 30,
    questionDuration: 10
  }
  ];

  $scope.activePart = $scope.parts[0];
  $scope.currentQuestionNumber = $scope.parts[0].questionNumbers[0];
  $scope.timerRunning = false;
  $scope.timerPaused = false;
  $scope.timerActive = false;

  $scope.setPart = function(index) {
    $scope.activePart = $scope.parts[index];
    $scope.resetTimer();
    $scope.timerActive = true;
  };

  $scope.isSet = function(index) {
    return $scope.activePart === $scope.parts[index];
  };

  $scope.startTimer = function (){
    $scope.$broadcast('timer-start');
    $scope.timerRunning = true;
    $scope.timerPaused = false;
  };

  $scope.stopTimer = function (){
    $scope.$broadcast('timer-stop');
    $scope.timerRunning = false;
    $scope.timerPaused = true;
  };

  $scope.resetTimer = function (){
    $scope.$broadcast('timer-set-countdown');
    $scope.currentQuestionNumber = $scope.activePart.questionNumbers[0];
    $scope.timerRunning = false;
    $scope.timerPaused = false;
  };

  $scope.resetQuestionTimer = function () {
    $scope.$broadcast('timer-start');
  };

  $scope.toggleTimer = function() {
    if ($scope.timerRunning) {
      $scope.stopTimer();
    }
    else {
      $scope.startTimer();
    }
  };

  $scope.toggleMenu = function() {
    if ($scope.timerRunning) {
      $scope.stopTimer();
    }

    $(document).on('click',function(){
      $('.collapse').collapse('hide');
    });
  };

  $scope.goToNextQuestionNumber = function() {
    $scope.$apply(function() {
      var lastQuestionNumber = $scope.currentQuestionNumber === $scope.activePart.questionNumbers[$scope.activePart.questionNumbers.length - 1];

      if (lastQuestionNumber) {
        $scope.resetTimer();
        $('#myModal').modal({backdrop: 'static'});
      }
      else {
        $scope.resetQuestionTimer();
        $scope.currentQuestionNumber = $scope.currentQuestionNumber + 1;
      }
    });
  };
}

// provides the ability to filter a value into a timer interval
function timerTime() {
  return function(time) {

    var tick = time;
    var mins = Math.floor(tick / 60);
    var secs = tick % 60;
    var tock = (mins < 10 ? '0' : '' ) + mins + ':' + (secs < 10 ? '0' : '' ) + secs;

    return tock;
  };
}

angular
  .module('toeicTimerApp', ['timer'])
  .controller('PartsCtrl', ['$scope', PartsCtrl])
  .filter('timerTime', [timerTime]);

$(function() {
  setTimeout(function(){$('[data-toggle="tooltip"]').tooltip({container: 'body'});}, 1000);
});
