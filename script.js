gsap.set(".box", {
    borderRadius:0,
})

gsap.to(".box", {
    borderRadius:100,
    duration: 1,
    x:-400,
    y:400,
    ease:"power1",
    yoyo:true,
    repeat:-1,
    stagger:{
        amount:4,
        each:0.5,
        from:0,
    }
})