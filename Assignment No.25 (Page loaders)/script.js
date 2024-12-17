
var header=document.querySelector('.header')
header.style.display='none'

var containers = document.querySelector('.container')
containers.style.display='none'

var loader = document.querySelector('.loader')
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(() =>{
        loader.style.display='none'
        header.style.display='flex'
        header.style.animation='fadeOut linear 0.4s'
        containers.style.display='flex'
        containers.style.animation='show linear 0.4s'

    },5000)
})
