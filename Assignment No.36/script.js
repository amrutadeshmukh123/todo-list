gsap.from('.container1 h1',{
    opacity:0,
    y:-200,
    delay:0.8,
    duration:1
})
gsap.from('.container2 p',{
    transform:'translateX(150%)',
    scrollTrigger:{
        trigger:'.container2',
        scroller:'body',
        start:'top 0%',
        end:'top -100%',
        scrub:3,
        duration:0.5,
        pin:true
    }
})

var cursor = document.querySelector('.cursor')
document.addEventListener('mousemove',(Event)=>{
    gsap.to(cursor,{
        x:Event.x,
        y:Event.y,
        duration:1
    })
})

var textP = document.querySelector('.container2 p')
textP.addEventListener('mouseenter',()=>{
    gsap.to(cursor,{
        background:'rgba(220, 20, 60, 0.696)',
        scale:3
    })
})
textP.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        background: 'linear-gradient(65deg,blue,crimson)',
        scale:1
    })
})

var container3 = document.querySelector('.container3 img')
container3.addEventListener('mouseenter',()=>{
    gsap.to(cursor,{
        scale:5,
        borderRadius:'25% 45%',
        backgroundColor:'black'
    })
})
container3.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        background: 'linear-gradient(65deg,blue,crimson)',
        borderRadius:'60% 60%',
        scale:1
    })
})