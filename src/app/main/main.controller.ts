/// <reference path="../../../bower_components/dt-angular/angular.d.ts" />
'use strict';

/**
 * Property names chosen as a balance between short names (smaller HTML) and readable names.
 * Keep an eye open for an easy way to minify these names in the future.
 */
interface IMainScope extends ng.IScope {
  inputMins: number;
  target: number;
  up: number;
  start(): void;
}

angular.module('timerApp')
  .controller('MainCtrl', function (
    $scope: IMainScope,
    $interval: ng.IIntervalService,
    $window: ng.IWindowService,
    millis: () => number
  ) {
    var storageKey = 'mins';
    var interval: ng.IPromise<any>;
    $scope.target = 0;
    $scope.up = 0;

    var storedMins = parseInt($window.localStorage.getItem(storageKey), 10);
    $scope.inputMins = isNaN(storedMins) ? 1 : storedMins;

    $scope.start = function () {
      $window.localStorage.setItem(storageKey, $scope.inputMins.toString());
      $scope.target = $scope.inputMins * 60 * 1000;
      $scope.up = 0;
      $interval.cancel(interval);
      // start the first tick as close to the start of the timer as possible,
      // improves the first second of the animation
      var startTime = millis();
      var tick = function () {
        var currentTime = millis();
        $scope.up = currentTime - startTime;
        if ($scope.up >= $scope.target) {
          $scope.up = $scope.target;
          $interval.cancel(interval);
        }
      };
      tick();
      interval = $interval(tick, 200);
    };
  });
