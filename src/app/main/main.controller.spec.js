'use strict';

describe('controllers', function(){
  var MainCtrl;
  var $scope;

  beforeEach(module('timerApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: $scope
    });
  }));

  it('cancels a countdown currently in progress', inject(function ($interval) {
    $scope.start();
    expect($scope.up).toBe(0);
    $interval.flush(100);
    expect($scope.up > 0).toBeTruthy();
    $scope.start();
    expect($scope.up).toBe(0);
  }));
});
