var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell');

gulp.task('buildcpp', shell.task([
  'g++ -std=c++11 hello.cpp',
  './a.out'
]))

gulp.task('watch', function () {
    gulp.watch('hello.cpp', ['buildcpp']);
});