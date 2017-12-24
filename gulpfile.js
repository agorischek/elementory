var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename")

gulp.task('build', function(){
  return gulp.src('elementory.js')
    .pipe(uglify())
    .pipe(rename("elementory.min.js"))
    .pipe(gulp.dest('./'))
});

gulp.task('default', [ 'build' ]);