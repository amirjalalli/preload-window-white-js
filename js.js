const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function(){
    // console.log('load')
    //FIRST WAY
    // loaderElem.classList.add('hidden')
    //second way 
    loaderElem.className += ' hidden'

})