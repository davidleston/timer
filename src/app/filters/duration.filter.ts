/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

angular.module('timerApp')
  .filter('duration', function () {
    var format = function (time: number) {
      if (time < 10) {
        return '0' + time.toString();
      }
      return time.toString();
    };
    return function (milliseconds: number) {
      var seconds = Math.floor(milliseconds / 1000) % 60;
      var minutes = Math.floor(milliseconds / 1000 / 60);
      return format(minutes) + ':' + format(seconds);
    };
  });
