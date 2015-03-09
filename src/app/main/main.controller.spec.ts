/// <reference path="../../../bower_components/dt-jasmine/jasmine.d.ts" />
/// <reference path="../../../bower_components/dt-angular/angular-mocks.d.ts" />
'use strict';

describe('controllers', function(){
  var $scope: IMainScope;

  beforeEach(module('timerApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller: ng.IControllerService, $rootScope) {
    $scope = $rootScope.$new();
    $controller('MainCtrl', {
      $scope: $scope
    });
  }));

  /**
   * Temporarily commenting out until time can be mocked
  it('cancels a countdown currently in progress', inject(function ($interval) {
    jasmine.clock().install();
    var baseTime = new Date();
    $scope.start();
    expect($scope.up).toBe(0);
    jasmine.clock().tick(201);
    expect((new Date()).getTime()).toBe(baseTime.getTime() + 201);
    $interval.flush();
    expect($scope.up).toBeGreaterThan(0);
    $scope.start();
    expect($scope.up).toBe(0);
  }));
   **/
});
