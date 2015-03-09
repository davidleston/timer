/// <reference path="../../../bower_components/dt-angular/angular.d.ts" />
'use strict';

angular.module('timerApp')
  .service('millis', function () {
    return function () {
      return (new Date()).getTime();
    };
  });
