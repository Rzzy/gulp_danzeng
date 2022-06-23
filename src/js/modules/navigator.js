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
module.exports = navigator