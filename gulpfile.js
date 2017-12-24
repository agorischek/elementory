var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var mocha = require("gulp-mocha");


gulp.task("build", function(){
  return gulp.src("elementory.js")
    .pipe(uglify())
    .pipe(rename("elementory.min.js"))
    .pipe(gulp.dest("./"))
});

gulp.task("test", function(){
    gulp.src("test/test.js", {read: false})
        .pipe(mocha())
})

gulp.task("default", ["build", "test"]);