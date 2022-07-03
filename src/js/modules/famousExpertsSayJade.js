const cleateSwiper = require('./walking_lantern')

module.exports = function(){
    if(window.innerWidth <= 640) {
        cleateSwiper({
            container:'#famous_experts_say_jade_mobile',
            pagination: '#famous_experts_say_jade_mobile .swiper-pagination',
            nextEl:"#famous_experts_say_jade_mobile .swiper-button-prev",
            prevEl:"#famous_experts_say_jade_mobile .swiper-button-next"
        })
    }
}