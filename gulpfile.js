const { series, watch, parallel } = require('gulp');
const $ = require('gulp-load-plugins')()
const open = require('open')
const { less, clean: cleanLess } = require('./build/less.js')
const { html, clean: cleanHtml } = require('./build/html.js')
const { script, clean: cleanScript } = require('./build/script.js')
const { image, clean: cleanImage } = require('./build/image.js')
const { lib, clean: cleanLib } = require('./build/lib.js')
const { clean } = require('./build/clean.js')
const app = require('./config/config.js')


const build = series(clean, parallel(less, html, lib, script, image))

function server(cb){
  $.connect.server({

    //服务起来的入口
    root: [app.prd],
    //文件更改后自动刷新页面
    livereload: true,
    
    //端口号
    port: 1234
  
  });
  open('http://localhost:1234');

  watch('libs/**/*' , lib);
  //监听 script 下边的 js 文件，并执行 script 方法  

  watch(app.src + 'js/**/*.js', script);

  watch(app.src + 'html/*.html', html);

  watch(app.src + 'less/**/*.less', less);

  watch(app.src + 'image/**/*', image);
  watch(app.src + 'pages/**/*', html);

  cb()
}


module.exports = { 
  less, 
  cleanLess, 
  image, 
  server, 
  build, 
  script, 
  html, 
  cleanHtml, 
  cleanScript, 
  cleanImage,
  clean 
}