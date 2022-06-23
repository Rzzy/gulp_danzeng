const { series, src, dest, parallel } = require('gulp');
const $ = require('gulp-load-plugins')()
const app = require('../config/config.js')
function cleanDev(cb) {
    src(app.dev, {read: false, allowEmpty:true })
    .pipe($.clean())
    cb();
  }
function cleanPro(cb) {
  src(app.prd, {read: false, allowEmpty:true })
  .pipe($.clean())

  cb();
}

const clean = parallel(cleanDev, cleanPro)

module.exports = {
  clean, cleanDev, cleanPro
}