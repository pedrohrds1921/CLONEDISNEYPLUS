const gulp=require('gulp')
const sass=require('gulp-sass')(require('sass'))
const imagemin=require('gulp-imagemin')
const uglify= require('gulp-uglify')


const scripts=()=>{

    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

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
exports.default=gulp.parallel(styles,images,scripts)

exports.watch = function(){


    gulp.watch('./src/styles/*.scss',()=>styles())
    gulp.watch('./src/scripts/*.js',gulp.parallel(scripts))
}