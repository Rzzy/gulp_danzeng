const { debounce } = require('./utils')  

function updatePicSrc(){
    
    const vW = window.innerWidth;
    const imgs = document.querySelectorAll('img')
    for(let i=0;i<imgs.length;i++) {
        const curImg = imgs[i] 
        const pcImg =curImg.getAttribute('pimg')
        const mobileImg = curImg.getAttribute('mimg')
        const defaultSrc =  curImg.src
        
        if(vW > 640){
            curImg.src = pcImg || defaultSrc
        } else {
            curImg.src = mobileImg || defaultSrc
        }
    }
}
const debounceUpdatePicSrc = debounce(updatePicSrc, 300)
function bindEvent(){
    document.addEventListener("DOMContentLoaded", function(event) {
        updatePicSrc()
    });
}
module.exports = {
    updatePicSrc, bindEvent, debounceUpdatePicSrc
}