const cleateSwiper = require('./modules/walking_lantern.js')
const navigator = require('./modules/navigator.js')
const productDetailImgList = require('./modules/product_detail_img_list.js')
const productTabChange = require('./modules/product_tab_change.js')
const headerFunc = require('./modules/header.js')
function setRem() {
    // 默认使用100px作为基准大小
    const baseSize = 100;
    const baseVal = baseSize / 1920;
    const vW = window.innerWidth; // 当前窗口的宽度
    const rem = vW * baseVal; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
    window.$size = rem / 100;
    document.documentElement.style.fontSize = rem + "px";
  }
  // 初始化
  setRem();
  // 窗口大小变化时重置 rem
  window.onresize = function() {
    setRem();
  };

  window.onload = function(){
    cleateSwiper()
    navigator();
    productDetailImgList()
    productTabChange()
    headerFunc()
  }