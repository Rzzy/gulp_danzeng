const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')()
const app = require('../config/config.js')
const { navgatorData } = require('../config/mock.js')
// 编译html文件
function html(cb) {
    src(app.src + 'pages/**/*.html')
    .pipe($.fileInclude({
        prefix: '@@',
        basepath:'@file',
        context: {
            navgatorData
        }
    }))
    .pipe(dest(app.dev))
    .pipe(dest(app.prd))
    .pipe($.connect.reload())

    cb()
}
function clean(cb) {
    src(app.dev + '*.html', {read: false})
    .pipe($.clean())
    
    src(app.prd + '*.html', {read: false})
    .pipe($.clean())

    cb();
}

module.exports = { html, clean }