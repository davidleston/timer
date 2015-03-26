/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

describe('controllers', function(){
  var $scope: IMainScope;
  var millis: number;

  beforeEach(module('timerApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller: angular.IControllerService, $rootScope) {
    millis = 0;
    $scope = $rootScope.$new();
    $controller('MainCtrl', {
      $scope: $scope,
      millis: function () {
        return millis;
      }
    });
  }));

  it('cancels a countdown currently in progress', inject(function ($interval) {
    $scope.start();
    expect($scope.up).toBe(0);
    millis = 201;
    $interval.flush(millis);
    expect($scope.up).toBeGreaterThan(0);
    $scope.start();
    expect($scope.up).toBe(0);
  }));
});
