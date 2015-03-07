'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
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
    .pipe(gulp.dest(paths.tmp + '/serve/'))
    .pipe($.size())
});

