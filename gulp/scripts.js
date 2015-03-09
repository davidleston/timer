'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  var notSpecsFilter = $.filter('**/!(*.spec).js');
  var specsFilter = $.filter('**/*.spec.js');
  return gulp.src(paths.src + '/{app,components}/**/*.ts')
    .pipe($.tslint())
    .pipe($.tslint.report('verbose'))
    .pipe($.typescript({
      noEmitOnError: true,
      target: 'ES5'
    }))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(notSpecsFilter)
    .pipe(gulp.dest(paths.tmp + '/serve/'))
    .pipe(notSpecsFilter.restore())
    .pipe(specsFilter)
    .pipe(gulp.dest(paths.tmp + '/tests/'))
    .pipe(specsFilter.restore())
    .pipe($.size())
});

