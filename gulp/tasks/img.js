module.exports = function() {
    $.gulp.task('img:copy', function() {
        return $.gulp.src('app/img/**/*.*')
            .pipe($.gulp.dest('dist/img'))
    });
    $.gulp.task('img:build', function() {
        return $.gulp.src('app/img/**/*.{png,jpg,gif,jpeg}')
            .pipe($.gp.tinypng('jBzE-rB2BCcnZwycya8wRLkR8_KIjlZe'))
            .pipe($.gulp.dest('dist/img'))
    });
    $.gulp.task('svg:copy', function() {
        return $.gulp.src('app/img/svg/*.svg')
            .pipe($.gulp.dest('dist/img/svg/'))
    });

};