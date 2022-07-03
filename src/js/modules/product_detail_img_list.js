const cleateSwiper = require('./walking_lantern')
function createPcImgList(){
  var detail_img_list_swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var detail_img_list_swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: detail_img_list_swiper,
    },
  });
}
function createMobileImgList(){
  cleateSwiper({
      container:'#product_detail_img_list_mobile',
      pagination: '#product_detail_img_list_mobile .swiper-pagination',
      nextEl:'#product_detail_img_list_mobile .swiper-button-prev',
      prevEl:'#product_detail_img_list_mobile .swiper-button-next',
  })
}
module.exports = function (){
  if(window.innerWidth <= 640) {
    createMobileImgList();
  } else {
    createPcImgList()
  }
}