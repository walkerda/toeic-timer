'use strict';

/**
 * @ngdoc overview
 * @name toeicTimerApp
 * @description
 * # toeicTimerApp
 *
 * Main module of the application.
 */

// PartsCtrl function that's passed into the PartsCtrl
function PartsCtrl($scope) {
    $scope.parts = [
        {
            name: 'landing',
            questionNumbers: ['---'],
            timerDuration: 0,
            questionDuration: 0
        },
        {
            name: 'part5',
            questionNumbers: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
                122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140],
            timerDuration: 15 * 60,
            questionDuration: 39
        },
        {
            name: 'part6',
            questionNumbers: [141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152],
            timerDuration: 6 * 60,
            questionDuration: 54
        },
        {
            name: 'part7',
            questionNumbers: [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173,
                174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197,
                198, 199, 200],
            timerDuration: 54 * 60,
            questionDuration: 75
        },
        {
            name: 'allparts',
            questionNumbers: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
                122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
                146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
                170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193,
                194, 195, 196, 197, 198, 199, 200],
            timerDuration: 75 * 60,
            questionDuration: 76
        }
    ];

    $scope.activePart = $scope.parts[0];
    $scope.activeTimer = $scope.parts[0].timerDuration;
    $scope.activeQuestion = $scope.parts[0].questionNumbers[0];
    $scope.questionTimer = $scope.parts[0].questionDuration;

    $scope.setPart = function(index) {
        $scope.activePart = $scope.parts[index];
        $scope.activeTimer = $scope.parts[index].timerDuration;
        $scope.activeQuestion = $scope.parts[index].questionNumbers[0];
        $scope.questionTimer = $scope.parts[index].questionDuration;
    };

    $scope.isSet = function(index) {
        return $scope.activePart === $scope.parts[index];
    };

    // trying to figure out how to switch the question numbers...not sure if a function is the way to go
    // not sure where I would call it either
    // still a work-in-progress
    $scope.nextQuestionNumber = function(index) {
        if ($scope.questionTimer === 0) {
            $scope.activeQuestion = $scope.parts[index].questionNumbers[index] + 1;
        }
    };

}


// TimerCtrl function that's passed into the TimerCtrl
function TimerCtrl($scope) {
    $scope.timerRunning = false;
    $scope.startLabel = "START";

    $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    $scope.resetTimer = function (){
        $scope.$broadcast('timer-reset');
        $scope.timerRunning = false;
    };

}

function timerTime() {
    return function(time) {

        var tick = time;
        var mins = Math.floor(tick/60);
        var secs = tick % 60;
        var tock = (mins < 10 ? "0" : "" ) + mins + ":" + (secs < 10 ? "0" : "" ) + secs;

        return tock;
    }
}

// angular app setup
angular
    .module('toeicTimerApp', ['timer'])
    .controller('PartsCtrl', PartsCtrl)
    .controller('TimerCtrl', TimerCtrl)
    .filter('timerTime', timerTime);






