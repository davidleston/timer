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

  it('cancels a countdown currently in progress', inject(function ($interval) {
    $scope.start();
    expect($scope.up).toBe(0);
    $interval.flush(201);
    expect($scope.up > 0).toBeTruthy();
    $scope.start();
    expect($scope.up).toBe(0);
  }));
});
