const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')()
const app = require('../config/config.js')

function script(cb){
    src(app.src + 'js/*.js')
    .pipe($.browserify({
        insertGlobals : true,
        debug:true 
    }))
    .pipe($.babel({
        presets: ['@babel/env']
    }))
    .pipe(dest(app.dev + 'js'))
    .pipe($.uglify())
    .pipe(dest(app.prd + 'js'))
    .pipe($.connect.reload())

    cb()
}

function clean(cb) {
    src(app.dev+'js/', {read: false})
    .pipe($.clean())
    
    src(app.prd+'js/', {read: false})
    .pipe($.clean())

    cb();
}

module.exports = { script, clean }