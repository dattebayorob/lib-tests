const gulp = require('gulp');
const concat = require('gulp-concat')

function concatStyles(){
    return {
        name: "concat-styles",
        options(opt){},
        generateBundle(opt){
            return gulp.src([
                // 'src/assets/css/base.css',
                'src/**/*.css'
            ])
            .pipe(concat('base.css'))
            .pipe(gulp.dest('dist/assets/css'))
        }
    }
}

module.exports = {
    rollup(config) {
        config.plugins.push(concatStyles());
        return config;
    },
  };