const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')()
const app = require('../config/config.js')
// 编译less文件
function less(cb) {
    src(app.src + 'less/index.less')
    .pipe($.less())
    .pipe(dest(app.dev + 'css'))
    .pipe($.cssmin())
    .pipe(dest(app.prd + 'css'))
    .pipe($.connect.reload())
  
    cb()
}

function clean(cb) {
    src(app.dev + 'css/', {read: false})
    .pipe($.clean())
    
    src(app.prd + 'css/', {read: false})
    .pipe($.clean())

    cb();
}

module.exports = { less, clean }