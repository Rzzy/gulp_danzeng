function navigator(){
    const navigators_wrap = document.querySelector('#navigator_slide_wrap');
    const navigators = document.querySelectorAll('.navigator-list li a');
    let timer = null
    for(let i=0;i<navigators.length;i++) {
        const el = navigators[i]
        el.addEventListener('mouseenter', function(){
            if(i===0) {
                clearOtherNavActive(null, navigators)
                hideSlide()
                return
            }

            if(timer) {
                clearTimeout(timer)
            }
            
            clearOtherNavActive(i, navigators)
            showCurentSlide(i)
        }, false)
        el.addEventListener('mouseleave', function(){
            timer = setTimeout(function(){
                el.className = ''
                hideSlide()
            }, 200)
            
        }, false)

    }
    navigators_wrap.addEventListener('mouseenter', function(){
        if(timer) {
            clearTimeout(timer)
        }
    }, false)
    navigators_wrap.addEventListener('mouseleave', function(){
        if(timer) {
            hideSlide(i)
            clearOtherNavActive(null, navigators)
        }
    }, false)
}
function clearOtherNavActive(index, nodes){
    for(let i=0;i<nodes.length;i++) {
        if(i === index) {
            nodes[i].className = 'active'
        } else {
            nodes[i].className = ''
        }
        
    }  
}
function showCurentSlide(index){
    index = index-1
    const navigators_wrap = document.querySelector('#navigator_slide_wrap');
    const navigators_slides = navigators_wrap.querySelectorAll('.navigator_slide')
    for(let i=0;i<navigators_slides.length;i++) {
        if(i=== index) {
            navigators_slides[i].style.display = 'block'
        } else {
            navigators_slides[i].style.display = 'none'
        }
        navigators_wrap.style.height = '265px';
    }
}
function hideSlide(){
    const navigators_wrap = document.querySelector('#navigator_slide_wrap');
    navigators_wrap.style.height = '0';
}
function mobileMenuSliderShowOrHide(mobile_menu_slider){
    const display = mobile_menu_slider.style.display
    console.log(display)
    if(display !== 'none') {
        mobile_menu_slider.style.display = 'none'
    } else {
        mobile_menu_slider.style.display = 'block'
    }
}
function mobileNavigator(){
    const mobile_menu_slider = document.querySelector('#mobile_menu_slider')
    const closeBtn = mobile_menu_slider.querySelector('a.close_btn')
    const menuItems = mobile_menu_slider.querySelectorAll('dt')
    const menuItemconts = mobile_menu_slider.querySelectorAll('dd')
    const menuBtn =  document.querySelector('#mobile_menu_btn') 

    menuBtn.addEventListener('click', function(){
        mobileMenuSliderShowOrHide(mobile_menu_slider)
    }, false)
    closeBtn.addEventListener('click', function(){
        mobileMenuSliderShowOrHide(mobile_menu_slider)
    }, false)
    mobileNavigatorItems(menuItems, menuItemconts)
}
function mobileNavigatorItems(menuItems, menuItemconts){
    const itemCount = menuItems.length

    for(let i=1;i<itemCount;i++) {
        menuItems[i].addEventListener('click', function(){
            for(let j=1; j<itemCount; j++) {
                if(i === j) {
                    menuItems[j].className = 'active'
                    menuItemconts[j].style.display = 'block'
                } else {
                    menuItems[j].className = ''
                    menuItemconts[j].style.display = 'none'
                }
            }
        }, false)
    } 
}
module.exports = function (){
    navigator()
    mobileNavigator()
}