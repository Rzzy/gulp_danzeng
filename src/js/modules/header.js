function searchContentWrap(){
    const search_content_wrap = document.querySelector('#search_content_wrap')
    const display = search_content_wrap.style.display
    
    if(display !== 'block') {
        search_content_wrap.style.display  = 'block'
    } else {
        search_content_wrap.style.display  = 'none'
    }
}

module.exports = function(){
    const search_btn = document.querySelector('#search_btn')
    const search_btn_in_show = document.querySelector('#search_btn_in_show')
    const  search_input = document.querySelector('#search_input')
    search_btn && search_btn.addEventListener('click', function(){
        searchContentWrap()
    }, false)
    search_btn_in_show && search_btn_in_show.addEventListener('click', function(){
        searchContentWrap()
    }, false)
    search_input && search_input.addEventListener('keyup', function(e){
        if(e.keyCode === 27) {
            searchContentWrap()
        }
    })
}