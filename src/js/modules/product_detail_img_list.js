module.exports = function (){
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