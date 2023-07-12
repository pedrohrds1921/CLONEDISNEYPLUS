const gulp=require('gulp')
const sass=require('gulp-sass')(require('sass'))
const imagemin=require('gulp-imagemin')



const styles=()=>{
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:"compressed"}))
    .pipe(gulp.dest('./dist/css'))
}


const images=()=>{
    return gulp.src('./images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}
exports.default=gulp.parallel(styles,images)

exports.watch = function(){


    gulp.watch('./src/styles/*.scss',()=>styles())
}