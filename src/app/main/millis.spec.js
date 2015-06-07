'use strict';

describe('Service: millis', function () {

  // load the filter's module
  beforeEach(module('timerApp'));

  it('does not throw an error and returns a number', inject(function (millis) {
    expect(millis()).toEqual(jasmine.any(Number));
  }));
});
