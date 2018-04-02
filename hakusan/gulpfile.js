// Load Gulp
var gulp = require('gulp');

// Load Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');

/*
    SASS
*/

gulp.task('sass', function () {
  return gulp.src(['scss/*.scss','*.scss'])
    .pipe(sass().on('error', sass.logError))
    // .pipe(rename('style.css'))
    .pipe(concat('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(''));
});

gulp.task('sassSketches', function () {
  return gulp.src(['sketches/*/index.scss','*.scss'])
    .pipe(sass().on('error', sass.logError))
    // .pipe(rename('style.css'))
    // .pipe(concat('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(function (file) {
        return file.base;
 }));
});

// gulp.task('packScripts', function() {
//   return gulp.src('components/*.js')
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest(''));
// });

gulp.task('packScripts', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        concat('main.js'),
        gulp.dest('')
    ],
    cb
  );
});

/*
    WATCH
*/

gulp.task('watch', function() {
  gulp.watch('**/*.scss', ['sass']);
  gulp.watch('js/*.js', ['packScripts']);
  gulp.watch('sketches/*/*.scss', ['sassSketches']);
});



// The default task (called when you run `gulp` from cli)
gulp.task('makeit', ['watch', 'sass', 'sassSketches', 'packScripts']);
