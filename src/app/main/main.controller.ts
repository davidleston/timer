/// <reference path="../../../bower_components/dt-angular/angular.d.ts" />
'use strict';

interface IMainScope extends ng.IScope {
  inputMins: number;
  target: number;
  up: number;
  start(): void;
}

angular.module('timerApp')
  .controller('MainCtrl', function ($scope : IMainScope, $interval : ng.IIntervalService, $window : ng.IWindowService) {
    var storageKey = 'mins';
    var interval:ng.IPromise<any>;

    var storedMins = parseInt($window.localStorage.getItem(storageKey));
    $scope.inputMins = isNaN(storedMins) ? 1 : storedMins;

    $scope.target = 0;
    $scope.up = 0;

    $scope.start = function () {
      $window.localStorage.setItem(storageKey, $scope.inputMins.toString());
      var startTime = new Date().getTime();
      $scope.target = $scope.inputMins * 60 * 1000;
      $scope.up = 0;

      $interval.cancel(interval);
      var tick = function () {
        var currentTime = new Date().getTime();
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
