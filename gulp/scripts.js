'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('copy', function () {
  var notSpecsFilter = $.filter('**/!(*.spec).js');
  var specsFilter = $.filter('**/*.spec.js');
  return gulp.src(paths.src + '/**/*.js')
    //.pipe($.jshint())
    //.pipe($.jshint.report('fail'))
    .pipe(notSpecsFilter)
    .pipe(gulp.dest(paths.tmp + '/serve/'))
    .pipe(notSpecsFilter.restore())
    .pipe(specsFilter)
    .pipe(gulp.dest(paths.tmp + '/tests/'))
    .pipe(specsFilter.restore())
    ;
});

gulp.task('scripts', ['copy']);
