
var    gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
  minifycss =require('gulp-minify-css');

gulp.task('minify-css', function () {
  gulp.src('css/*.css')
  .pipe(concat('style.min.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('css/'))
});