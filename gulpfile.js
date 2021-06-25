var gulp = require('gulp');
var sass =  require('gulp-sass')(require('sass'));
var connect = require('gulp-connect');
var concat = require('gulp-concat');

gulp.task('sass', gulp.series( function() {
    return gulp.src(['src/index.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('hamburguer.css'))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
}));

gulp.task('watch', gulp.series( function() {
    gulp.watch(['src/*.scss'], gulp.parallel( ['sass'] ));
}));

gulp.task('connect', function() {
    connect.server({
        name: 'Dev Hamburger',
        root: 'app',
        port: 8000,
        livereload: true
    });
});

gulp.task('default', gulp.series( ['sass', 'watch', 'connect'] ));