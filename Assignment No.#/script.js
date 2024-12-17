gsap.from('.container1 h1',{
    opacity:0,
    y:-200,
    rotate:359,
    delay:0.5,
    duration:1
})
gsap.from('.container2 h2',{
    transform:'translateX(400%)',
    scrollTrigger:{
        trigger:'.container2',
        scroller:'body',
        start:'top 0%',
        end:'top -100%',
        scrub:4,
        pin:true
    }
})
gsap.from('.container2 .lower h1',{
    transform:'translateX(400%)',
    scrollTrigger:{
        trigger:'.container2',
        scroller:'body',
        start:'top 0%',
        end:'top -90%',
        scrub:4,
        pin:true
    }
})
gsap.from('.container2 .paragraph p',{
    transform:'translateX(400%)',
    scrollTrigger:{
        trigger:'.container2 ',
        scroller:'body',
        start:'top 0%',
        end:'top -80%',
        scrub:4,
        pin:true
    }
})
