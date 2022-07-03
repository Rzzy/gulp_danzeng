const cleateSwiper = require('./walking_lantern')
module.exports = function(){
    if(window.innerWidth <= 640) {
        cleateSwiper({
            container:'#online_pavilion_mobile',
            pagination: '#online_pavilion_mobile .swiper-pagination',
            nextEl:"#online_pavilion_mobile .swiper-button-prev",
            prevEl:"#online_pavilion_mobile .swiper-button-next"
        })
    }
}