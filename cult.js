var cursor = document.querySelector("#cursor")
var main = document.querySelector("body")
main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x  + "px";
    cursor.style.top = dets.y + "px";
});


function init(){
    gsap.registerPlugin(ScrollTrigger)
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
        };
    }
    // follwoing line is not required to work pinning on touch screen
    /* pinType: document.querySelector("#main
    ").style.transform
        ? "transform"
        : "fixed"*/
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
init()

var tl = gsap.timeline({
    scrollTrigger : {
        trigger : "#page1 h2",
        scroller : "#main",
        start : "top 60%",
        end : "top 0",
        scrub :2
    }
})
tl.to("#page1 h4",{
    x : -150,
},"anim");
tl.to("#page1 h3",{
    x : 150,
},"anim");
// tl.to("#page3",{
//     backgroundColor : "white",
// });

var tl1 = gsap.timeline({
    scrollTrigger : {
        trigger : "#page2",
        scroller : "#main",
        start : "top -40%",
        end : "top -100%",
        scrub : 3
    }
})
var tl2 = gsap.timeline({
    
})

// const media = () =>{
//     let q = matchMedia("(max-width : 600px)");
//     if(q.matches){
//         let g = gsap.timeline({
//             scrollTrigger :{
//                 trigger : "#page1",
//                 scroller : "#main",
//                 start : "top -60%",
//                 end : "top 0",
//                 scrub : 0
//             }
//         })
//         g.to("#page1 h2")
//     }
// }