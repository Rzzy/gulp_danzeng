const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')()
const app = require('../config/config.js')

function image(cb) {
    src(app.src + 'image/**/*')
    .pipe(dest(app.dev + 'image'))
    .pipe($.imagemin({
        progressive: true
    }))
    .pipe(dest(app.prd + 'image'))

    src(app.src + 'font/**/*')
    .pipe(dest(app.dev + 'font'))
    .pipe(dest(app.prd + 'font'))


    cb()
}


function clean(cb) {
    src(app.dev+'image/', {read: false})
    .pipe($.clean())
    
    src(app.prd+'image/', {read: false})
    .pipe($.clean())

    cb();
}

module.exports = { image, clean }