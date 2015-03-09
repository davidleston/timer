/// <reference path="../../../bower_components/dt-jasmine/jasmine.d.ts" />
/// <reference path="../../../bower_components/dt-angular/angular-mocks.d.ts" />
'use strict';

describe('Filter: duration', function () {

  // load the filter's module
  beforeEach(module('timerApp'));

  // initialize a new instance of the filter before each test
  var duration;
  beforeEach(inject(function ($filter) {
    duration = $filter('duration');
  }));

  it('adds leading zeros when formatting zero', function () {
    expect(duration(0)).toBe('00:00');
  });

  it('adds leading zeros when formatting non-zero but less than 10', function () {
    expect(duration(61 * 1000)).toBe('01:01');
  });

  it('displays more than two digits of minutes', function () {
    expect(duration(100 * 60 * 1000)).toBe('100:00');
  });
});
