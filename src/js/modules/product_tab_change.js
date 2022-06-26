function tabContentChange(tabContents, index){
    for(let i=0;i<2;i++) {
        if(index === i) {
            tabContents[i].style.display = 'block'
        } else {
            tabContents[i].style.display = 'none'
        }
    }
}
function setTabCurrent(tabs,index){
    for(let i=0;i<2;i++) {
        if(index === i) {
            tabs[i].className = 'active'
        } else {
            tabs[i].className = ''
        }
    }
}
module.exports = function (){
    const tabsWraper = document.querySelector('.price_description_content')
    const tabs = tabsWraper.querySelectorAll('dt a')
    const tabContents = tabsWraper.querySelectorAll('dd')
    for(let i= 0;i < tabs.length;i++) {
        const tab = tabs[i]
        tab.addEventListener('click', function(e){
            setTabCurrent(tabs, i)
            tabContentChange(tabContents, i)
        }, false)
    }
}