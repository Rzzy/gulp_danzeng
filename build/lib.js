const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')()
const app = require('../config/config.js')
// 将库文件迁移到打包文件中
function lib(cb){
  src('libs/**/*')
  .pipe(dest(app.dev+'vendor'))
  .pipe(dest(app.prd+'vendor'))
  .pipe($.connect.reload())
  cb()
}

function clean(cb) {
    src(app.dev+'vendor/', {read: false})
    .pipe($.clean())
    
    src(app.prd+'vendor/', {read: false})
    .pipe($.clean())

    cb();
}

module.exports = { lib, clean }