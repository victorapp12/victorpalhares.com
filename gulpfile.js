var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var paths = {
    sass: ['assets/sass/*.sass'], 
    js:['assets/js/*.js']
};


gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
    gulp.src('assets/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css/'))
        .on('end', done);
});

gulp.task('minify-css', function() {
  gulp.src('assets/css/main.css')
    .pipe(minifyCss({keepBreaks:true}))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('watch', ['sass'], function () {
    gulp.watch(paths.sass, ['sass']);
});
