'use strict';

module.exports = function (config) {

  config.set({
    autoWatch: false,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      '.tmp/serve/**/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'lcov',
      dir : '.tmp/reports/coverage/'
    }
  });
};
