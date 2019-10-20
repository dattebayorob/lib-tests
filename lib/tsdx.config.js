const gulp = require('gulp');
const concat = require('gulp-concat')
const flatten = require('gulp-flatten')

function copyAndConcatCss(){
    return {
        name: "copy-and-concat-css",
        options(){},
        generateBundle(){
            return gulp.src(['src/**/*.css'])
                    .pipe(concat('base.css'))
                    .pipe(gulp.dest('dist/assets/css'));
        }
    }
}
function copyImages(){
    return {
        name: "copy-images",
        options(){},
        generateBundle(){
            return gulp.src(['src/assets/img/*.png', 'src/assets/img/*.jpg'])
                    .pipe(flatten())
                    .pipe(gulp.dest('dist/assets/img'))
        }
    }
}

module.exports = {
    rollup(config) {
        config.plugins.push(copyAndConcatCss());
        config.plugins.push(copyImages());
        return config;
    },
  };