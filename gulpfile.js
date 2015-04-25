var gulp = require('gulp')
var clean = require('gulp-clean')
var jshint = require('gulp-jshint')
var uglify = require('gulp-uglify')
var notify = require('gulp-notify')
var traceur = require('gulp-traceur')
var es6ModuleTranspiler = require('gulp-es6-module-transpiler')

gulp.task('lint', function() {
    return gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('uglify', function () {
    return gulp.src('./register*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./out'))
})

gulp.task('traceur', function () {
    return gulp.src('./examples/js/classes/*.js')
        .pipe(traceur({ sourceMap: true }))
        .pipe(gulp.dest('./examples/js/out'))
})

gulp.task('es6modules', function () {
    return gulp.src('./examples/js/in/*.js')
        .pipe(es6ModuleTranspiler({ type: 'amd' }))
        .pipe(gulp.dest('./examples/js/out'))
        .pipe(notify('ES6 Modules are ready!'));
})

gulp.task('clean', function () {
    return gulp.src('./examples/js/out/*.js', { read: false })
        .pipe(clean())
})

gulp.task('watch', function() {

    // // Watch .scss files
    // gulp.watch('src/styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('./examples/js/in/*.js', [ 'clean', 'es6modules' ]);

    // // Watch image files
    // gulp.watch('src/images/**/*', ['images']);

})

gulp.task('default', [ 'clean', 'traceur' ]);
