var gulp = require('gulp')
var sass = require('gulp-sass')
var minify = require('gulp-cssmin')
var rename = require('gulp-rename')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', () => {
  return gulp.src('./src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(__dirname))
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(__dirname))
})

gulp.task('sass:watch', () => {
  gulp.watch('./src/**/*.scss', ['sass'])
})