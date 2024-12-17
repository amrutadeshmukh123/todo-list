var timeLine = gsap.timeline()
var menuIcon = document.querySelector('.header i')
var closeIcon = document.querySelector('.menu .links i')

timeLine.pause()

timeLine.to('.menu',{
    right:0,
    duration:0.5
})
timeLine.from('.menu .links a',{
    x:100,
    stagger:0.5,
    opacity:0
})
timeLine.from('.menu .links button',{
    y:100,
    opacity:0
})
timeLine.from('.menu .links i',{
    scale:0.2,
    opacity:0,
    rotate:90
})

menuIcon.addEventListener('click',()=>{
    timeLine.play()
})
closeIcon.addEventListener('click',()=>{
    timeLine.reverse()
})