const cleateSwiper = require('./modules/walking_lantern.js')
const navigator = require('./modules/navigator.js')
const productDetailImgList = require('./modules/product_detail_img_list.js')
const productTabChange = require('./modules/product_tab_change.js')
const headerFunc = require('./modules/header.js')
const { bindEvent, debounceUpdatePicSrc  } = require('./modules/pictureFill')
const onlinePavilionMobile = require('./modules/onlinePavilionMobile')
const famousExpertsSayJade = require('./modules/famousExpertsSayJade')
function setRem() {
    // 默认使用100px作为基准大小
    const vW = window.innerWidth; // 当前窗口的宽度
    const rem = vW / 640; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
    window.$size = rem / 100;
    document.documentElement.style.fontSize = rem + "px";
  }
  // 初始化
  setRem();
  // 窗口大小变化时重置 rem
  window.onresize = function() {
    setRem();
    debounceUpdatePicSrc();
    onlinePavilionMobile();
    famousExpertsSayJade();
  };
  bindEvent();
  window.onload = function(){
    cleateSwiper({
      container:'#walking_lantern',
      pagination: '#walking_lantern .swiper-pagination',
      nextEl:"#walking_lantern .swiper-button-prev",
      prevEl:"#walking_lantern .swiper-button-next"
    })
    navigator();
    productDetailImgList()
    productTabChange()
    headerFunc()
    onlinePavilionMobile()
    famousExpertsSayJade()
  }