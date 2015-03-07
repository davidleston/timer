'use strict';

describe('Filter: duration', function () {

  // load the filter's module
  beforeEach(module('stefTimerApp'));

  // initialize a new instance of the filter before each test
  var duration;
  beforeEach(inject(function ($filter) {
    duration = $filter('duration');
  }));

  it('returns the input prefixed with "duration filter:"', function () {
    expect(duration(0)).toBe('00:00');
  });

});
