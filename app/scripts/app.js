'use strict';

/**
 * @ngdoc overview
 * @name toeicTimerApp
 * @description
 * # toeicTimerApp
 *
 * Main module of the application.
 */
var tapp = angular.module('toeicTimerApp', []);

tapp.factory('parts', function() {
    var parts = {};
    var d = new Date();
    parts.selections = [
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
    return parts;
});

function PartsCtrl($scope, parts) {
    $scope.parts = parts;
}

//tapp.config(['stateProvider', function($stateProvider) {
//
//    $stateProvider
//        .state('landing', {
//            url: '/',
//            controller: 'Landing.controller',
//            templateUrl: '/views/landing.html'
//        })
//
//        .state('timerSelected', {
//            url: '/timerSelected',
//            templateUrl: '/views/timerSelected.html'
//        })
//
//        .state('help', {
//            url: '/help',
//            templateUrl: '/views/help.html'
//        })
//
//}]);



