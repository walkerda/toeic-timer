'use strict';

/**
 * @ngdoc overview
 * @name toeicTimerApp
 * @description
 * # toeicTimerApp
 *
 * Main module of the application.
 */

function PartsCtrl($scope) {
    var d = new Date();
    $scope.parts = [
        {
            name: 'landing',
            questionNumbers: ['---'],
            timerDuration: d.setMinutes(0,0),
            questionDuration: d.setSeconds(0,0)
        },
        {
            name: 'part5',
            questionNumbers: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
                122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140],
            timerDuration: d.setMinutes(15,0),
            questionDuration: d.setSeconds(23,8)
        },
        {
            name: 'part6',
            questionNumbers: [141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152],
            timerDuration: d.setMinutes(6,0),
            questionDuration: d.setSeconds(32,7)
        },
        {
            name: 'part7',
            questionNumbers: [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173,
                174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197,
                198, 199, 200],
            timerDuration: d.setMinutes(54,0),
            questionDuration: d.setSeconds(68,9)
        },
        {
            name: 'allparts',
            questionNumbers: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
                122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
                146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
                170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193,
                194, 195, 196, 197, 198, 199, 200],
            timerDuration: d.setMinutes(75,0),
            questionDuration: d.setSeconds(45,5)
        }
    ];

    $scope.activePart = $scope.parts[0];

    $scope.setPart = function(index) {
        $scope.activePart = $scope.parts[index];
    };

    $scope.isSet = function(index) {
        return $scope.activePart === $scope.parts[index];
    };

//    ConsoleLogger.test();

}

function PartsService($rootScope) {
    var d = new Date();
    $rootScope.parts = [
        {
            name: 'landing',
            questionNumbers: ['---'],
            timerDuration: d.setMinutes(0),
            questionDuration: ''
        },
        {
            name: 'part5',
            questionNumbers: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
                122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140],
            timerDuration: d.setMinutes(15,0),
            questionDuration: d.setSeconds(23,8)
        },
        {
            name: 'part6',
            questionNumbers: [141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152],
            timerDuration: d.setMinutes(6,0),
            questionDuration: d.setSeconds(32,7)
        },
        {
            name: 'part7',
            questionNumbers: [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173,
                174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197,
                198, 199, 200],
            timerDuration: d.setMinutes(54,0),
            questionDuration: d.setSeconds(68,9)
        },
        {
            name: 'allparts',
            questionNumbers: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
                122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
                146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
                170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193,
                194, 195, 196, 197, 198, 199, 200],
            timerDuration: d.setMinutes(75,0),
            questionDuration: d.setSeconds(45,5)
        }
    ];

    $rootScope.activePart = $rootScope.parts[0];

    return {
        setPart: function(index) {
            $rootScope.activePart = $rootScope.parts[index];
        },
        isSet: function(index) {
            return $rootScope.activePart === $rootScope.parts[index];
        }

    };
}

function TimerCtrl($scope) {
    $scope.timerRunning = false;

//    $scope.startTime = PartsService.activePart.timerDuration;

    $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    TimerCtrl.$inject = ['$scope'];
}


function ConsoleLogger() {
    return {
        test: function() {
            console.log("IT WORKS!!!");
        }
    };
}
angular
    .module('toeicTimerApp', ['timer'])
    .controller('PartsCtrl', PartsCtrl, ConsoleLogger)
    .controller('TimerCtrl', TimerCtrl, PartsService)
    .service('PartsService', PartsService)
    .service('ConsoleLogger',['$rootScope', ConsoleLogger($rootScope)]);






