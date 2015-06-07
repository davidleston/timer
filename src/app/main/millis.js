'use strict';

angular.module('timerApp')
  .service('millis', function () {
    return function () {
      return (new Date()).getTime();
    };
  });
