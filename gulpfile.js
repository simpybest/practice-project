const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const minifycss = require('gulp-minify-css');

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
      .pipe(minifycss())
      .pipe(gulp.dest('dist/css'));
    });