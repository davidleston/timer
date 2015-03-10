'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('typescript', ['copy', 'copyDefs'], function () {
  var notSpecsFilter = $.filter('**/!(*.spec).js');
  var specsFilter = $.filter('**/*.spec.js');
  return gulp.src(paths.tmp + '/{serve,tests}/**/*.ts', {base: paths.tmp + '/'})
    .pipe($.sourcemaps.init())
    .pipe($.typescript({
      noEmitOnError: true,
      target: 'ES5'
    }))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.tmp))
    .pipe($.size())
});

gulp.task('copy', function () {
  var notSpecsFilter = $.filter('**/!(*.spec).ts');
  var specsFilter = $.filter('**/*.spec.ts');
  return gulp.src(paths.src + '/**/*.ts')
    .pipe($.tslint())
    .pipe($.tslint.report('verbose'))
    .pipe(notSpecsFilter)
    .pipe(gulp.dest(paths.tmp + '/serve/'))
    .pipe(notSpecsFilter.restore())
    .pipe(specsFilter)
    .pipe(gulp.dest(paths.tmp + '/tests/'))
    .pipe(specsFilter.restore())
    ;
});

gulp.task('copyDefs', function () {
  return gulp.src('bower_components/**/*.d.ts', {base: './'})
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('scripts', ['typescript']);
