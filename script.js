
function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco()

function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from("#loader h1", {
      y: -150,
      stagger: 0.25,
      duration: 0.6,
      delay: 0.5,
    });
    tl.from(".load h4", {
      opacity: 0,
      onStart: function () {
        var h5timer = document.querySelector("#h5timer");
        var grow = 0;
        setInterval(function () {
          if (grow < 100) {
            h5timer.innerHTML = grow++;
          } else {
            h5timer.innerHTML = grow;
          }
        }, 27);
      },
    });
    tl.to("#main", {
        animationName: "loaderAnime",
        opacity: 1,
      });
      tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 2.6,
      });
      tl.from("#page1", {
        delay: 0.1,
        y: 1600,
        duration: 0.5,
        ease: Power4,
      });
      tl.to("#loader", {
        display: "none",
      });
      tl.from("#nav", {
        opacity: 0,
      });
      tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
        y: 140,
        stagger: 0.2,
      });
      tl.from(
        "#hero1, #page2",
        {
          opacity: 0,
        },
        
      );
    }
loadingAnimation()

function page2Animation() {

    var videoC = document.querySelector("#video-container")
    videoC.addEventListener("mouseenter", function () {
        gsap.to(".mousefollower", {
            opacity: 0
        })
    })
    videoC.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1
        })

        gsap.to("#play-btn", {
            left: "70%",
            top: "-15%"
        })
    })

    var videoImage = document.querySelector("#video-container img")
    var videoVideo = document.querySelector("#video-container video")

    var flag = 0

    videoC.addEventListener("click", function () {
        if (flag == 0) {

            gsap.to(videoVideo, {
                opacity: 1
            })

            gsap.to("#play-btn", {
                scale: 0.8
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-pause-line"></i>'
            videoVideo.play()
            flag = 1
        } else {
            gsap.to(videoVideo, {
                opacity: 0
            })
            gsap.to("#play-btn", {
                scale: 1
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-play-fill"></i>'

            videoVideo.pause()
            flag = 0
        }
    })

    videoC.addEventListener("mousemove", function (dets) {
        gsap.to("#play-btn", {
            left: dets.x - 555,
            top: dets.y - 200
        })
    })
}

page2Animation()


function SheryAnimation() {
    Shery.mouseFollower()

Shery.makeMagnet("#nav h4")

    Shery.imageEffect(".images", {
        style: 6,
        // debug:true,
        gooey: true,
        config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } }
    })

}

SheryAnimation()

function page4Animation() {
    gsap.to(".page4-mark", {
        x: -1000,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 150%",
            end: "top -50%",
            scrub: 2,
            // markers:true
        }
    })

    gsap.from(".page4-marking", {
        x: -1000,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 150%",
            end: "top -50%",
            scrub: 2,
            // markers:true
        }
    })

}

page4Animation()


// function themeChange() {

//     var obys = document.querySelector("#nav svg")

//     obys.addEventListener("click", function () {
//         document.documentElement.style.setProperty("--primary", "#fff")
//         document.documentElement.style.setProperty("--secondary", "#151515")
//     })
// }
function themeChange() {
    var obys = document.querySelector("#nav svg");

    obys.addEventListener("click", function () {
        var currentPrimary = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
        
        if (currentPrimary === "#fff") {
            // Change to dark theme
            document.documentElement.style.setProperty("--primary", "#151515");
            document.documentElement.style.setProperty("--secondary", "#fff");
        } else {
            // Change to light theme
            document.documentElement.style.setProperty("--primary", "#fff");
            document.documentElement.style.setProperty("--secondary", "#151515");
        }
    });
}

themeChange();



// var footerh1 = document.querySelector("#footer h1")

// var h1Text = footerh1.textContent

// var splittedFoot = h1Text.split("")
// var clutter = ""
// splittedFoot.forEach(function(elem){
//     clutter += `<span>${elem}</span>`
// })

// footerh1.innerHTML = clutter


// footerh1.addEventListener("mouseenter",function(){
//     var footl = gsap.timeline()
//     footl.to("#footer h1 span",{
//         opacity:0,
//         stagger:0.2
//     },"anim")
//     footl.to("#footer h1 span",{
//         opacity:1,
//         stagger:0.2,
//         delay:1,
//         fontFamily:"silk serif",

//     },"anim")
// })

var footText = document.querySelectorAll("#footer .text")

footText.forEach(function(elem){
    var elemText  = elem.textContent
    var splited = elemText.split("")
    var clutter = ""
    splited.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter
})


var footerText = document.querySelector(".footer-text")

footerText.addEventListener("mouseenter",function(){
    gsap.to("#footer h1 span",{
        opacity:0,
        stagger:0.1,
        duration:0.5
    })
    gsap.to("#footer h2 span",{
        opacity:1,
        delay:0.4,
        duration:0.5,
        stagger:0.1
    })
})

footerText.addEventListener("mouseleave",function(){
    gsap.to("#footer h2 span",{
        opacity:0,
        stagger:0.05,
        duration:0.3
    })
    gsap.to("#footer h1 span",{
        opacity:1,
        delay:0.4,
        duration:0.3,
        stagger:0.05
    })
})
// function flagAnimation() {
//     document.addEventListener("mousemove", function (dets) {
//       gsap.to("#flag", {
//         x: dets.x,
//         y: dets.y,
//       });
//     });
//     document.querySelector("#hero3").addEventListener("mouseenter", function () {
//       gsap.to("#flag", {
//         opacity: 1,
//       });
//     });
//     document.querySelector("#hero3").addEventListener("mouseleave", function () {
//       gsap.to("#flag", {
//         opacity: 0,
//       });
//     });
//   }
// flagAnimation();