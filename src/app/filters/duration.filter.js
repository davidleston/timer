'use strict';

angular.module('timerApp')
  .filter('duration', function () {
    var format = function (time) {
      if (time < 10) {
        return '0' + time;
      }
      return '' + time;
    };
    return function (milliseconds) {
      var seconds = Math.floor(milliseconds / 1000) % 60;
      var minutes = Math.floor(milliseconds / 1000 / 60);
      return format(minutes) + ':' + format(seconds);
    };
  });
