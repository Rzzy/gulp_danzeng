function searchContentWrap(display){
    const search_content_wrap = document.querySelector('#search_content_wrap')
    search_content_wrap.style.display  = display
}

module.exports = function(){
    const search_btn = document.querySelector('#search_btn')
    const search_btn_in_show = document.querySelector('#search_btn_in_show')
    const close_btn_in_show = document.querySelector('#close_btn_in_show')
    const  search_input = document.querySelector('#search_input')
    search_btn && search_btn.addEventListener('click', function(){
        searchContentWrap('block')
    }, false)
    search_btn_in_show && search_btn_in_show.addEventListener('click', function(){
        searchContentWrap('block')
    }, false)
    close_btn_in_show && close_btn_in_show.addEventListener('click', function(){
        searchContentWrap('none')
    }, false)
    search_input && search_input.addEventListener('keyup', function(e){
        if(e.keyCode === 27) {
            searchContentWrap()
        }
    })
}