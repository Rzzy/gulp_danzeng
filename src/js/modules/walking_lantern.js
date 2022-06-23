module.exports = function(){
  var mySwiper = new Swiper('.swiper-container',{
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        this.emit('slideChangeTransitionEnd');//在初始化时触发一次slideChangeTransitionEnd事件
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时运行当前slide动画
        this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
      } 
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}