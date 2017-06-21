var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', () => {
  return gulp.src('./src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./src/**/*.scss', ['sass'])
})