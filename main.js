// ############################################ index js code ##############################

// ############################ Next Button Logic ################################

// var data = 0;

// function next() {
//     if (data < 2) {
//         ++data;
//     }
//     if (data == 0) {
//         a = 1;
//         b = 0;
//         c = 0;
//     }
//     else if (data == 1) {
//         a = 0;
//         b = 1;
//         c = 0;
//     }
//     else if (data == 2) {
//         a = 0;
//         b = 0;
//         c = 1;
//     }
//     var box = document.querySelectorAll(".pbox");
//     var pro = document.querySelectorAll(".projdetail");

//     if (a == 1) {
//         box[0].setAttribute('style', 'height:100%;transition:1s;');
//         pro[0].setAttribute('style', 'height:100%;font-size:20px;transition:1s;');
//         pro[0].innerHTML = "<div class='projhead'><p>Project 1</p></div><div class='detail'><p> Project: Portfolio Website</p><p>Duration: 2 months</p><p>FrameWorks: React JS</p></div><div class='projlink'><div class='preview'><p>Preview</p></div><div class='link'><i class='bx bx-link-external'></i></div></div>";
//     }
//     else {
//         box[0].setAttribute('style', 'height:0px;transition:1s;');
//         pro[0].setAttribute('style', 'height:0px;font-size:20px;transition:1s;');
//         pro[0].innerHTML = "";
//     }

//     if (b == 1) {
//         box[1].setAttribute('style', 'height:100%;transition:1s;');
//         pro[1].setAttribute('style', 'height:100%;font-size:20px;transition:1s;');
//         pro[1].innerHTML = "<div class='projhead'><p>Project 2</p></div><div class='detail'><p> Project: Portfolio Website</p><p>Duration: 2 months</p><p>FrameWorks: React JS</p></div><div class='projlink'><div class='preview'><p>Preview</p></div><div class='link'><i class='bx bx-link-external'></i></div></div>";
//     }
//     else {
//         box[1].setAttribute('style', 'height:0px;transition:1s;');
//         pro[1].setAttribute('style', 'height:0px;font-size:20px;transition:1s;');
//         pro[1].innerHTML = "";
//     }
//     if (c == 1) {
//         box[2].setAttribute('style', 'height:100%;transition:1s;');
//         pro[2].setAttribute('style', 'height:100%;font-size:20px;transition:1s;');
//         pro[2].innerHTML = "<div class='projhead'><p>Project 3</p></div><div class='detail'><p> Project: Portfolio Website</p><p>Duration: 2 months</p><p>FrameWorks: React JS</p></div><div class='projlink'><div class='preview'><p>Preview</p></div><div class='link'><i class='bx bx-link-external'></i></div></div>";
//     }
//     else {
//         box[2].setAttribute('style', 'height:0px;transition:1s;');
//         pro[2].setAttribute('style', 'height:0px;font-size:20px;transition:1s;');
//         pro[2].innerHTML = "";
//     }

//     // data += 1;
//     console.log(data);

// }


// function prev() {

//     var a = 1;
//     var b = 1;
//     var c = 1;



//     if (data == 1) {
//         a = 1;
//         b = 0;
//         c = 0;
//     }
//     else if (data == 2) {
//         a = 0;
//         b = 1;
//         c = 0;
//     }
//     else if (data == 3) {
//         a = 0;
//         b = 0;
//         c = 1;

//     }
//     var box = document.querySelectorAll(".pbox");
//     var pro = document.querySelectorAll(".projdetail");

//     if (a == 1) {
//         box[0].setAttribute('style', 'height:100%;transition:1s;');
//         pro[0].setAttribute('style', 'height:100%;font-size:20px;transition:1s;');
//         pro[0].innerHTML = "<div class='projhead'><p>Project 1</p></div><div class='detail'><p> Project: Portfolio Website</p><p>Duration: 2 months</p><p>FrameWorks: React JS</p></div><div class='projlink'><div class='preview'><p>Preview</p></div><div class='link'><i class='bx bx-link-external'></i></div></div>";
//     }
//     else {
//         box[0].setAttribute('style', 'height:0px;transition:1s;');
//         pro[0].setAttribute('style', 'height:0px;font-size:20px;transition:1s;');
//         pro[0].innerHTML = "";
//     }

//     if (b == 1) {
//         box[1].setAttribute('style', 'height:100%;transition:1s;');
//         pro[1].setAttribute('style', 'height:100%;font-size:20px;transition:1s;');
//         pro[1].innerHTML = "<div class='projhead'><p>Project 2</p></div><div class='detail'><p> Project: Portfolio Website</p><p>Duration: 2 months</p><p>FrameWorks: React JS</p></div><div class='projlink'><div class='preview'><p>Preview</p></div><div class='link'><i class='bx bx-link-external'></i></div></div>";
//     }
//     else {
//         box[1].setAttribute('style', 'height:0px;transition:1s;');
//         pro[1].setAttribute('style', 'height:0px;font-size:20px;transition:1s;');
//         pro[1].innerHTML = "";
//     }
//     if (c == 1) {
//         box[2].setAttribute('style', 'height:100%;transition:1s;');
//         pro[2].setAttribute('style', 'height:100%;font-size:20px;transition:1s;');
//         pro[2].innerHTML = "<div class='projhead'><p>Project 3</p></div><div class='detail'><p> Project: Portfolio Website</p><p>Duration: 2 months</p><p>FrameWorks: React JS</p></div><div class='projlink'><div class='preview'><p>Preview</p></div><div class='link'><i class='bx bx-link-external'></i></div></div>";
//     }
//     else {
//         box[2].setAttribute('style', 'height:0px;transition:1s;');
//         pro[2].setAttribute('style', 'height:0px;font-size:20px;transition:1s;');
//         pro[2].innerHTML = "";
//     }
//     if (data > 0) {
//         data--;
//     }

//     console.log(data);

// }




//  ############################## Scroll Animation GSAP ######################################
gsap.registerPlugin(ScrollTrigger);

gsap.from(".header .logo", {
    x: -300,
    duration: 1,
})

gsap.from(".nav a", {
    x: -200,
    duration: 1,
    delay: 1,
    stagger: 0.5
})

gsap.from(".socialMedia a", {
    rotate: 360,
    scale: 0,
    duration: 0.5,
    stagger: 0.5,
    delay: 2
});

gsap.from(".hello p", {
    y: 300,
    opacity: 0,
    duration: 1,
    opacity: 0
})

gsap.from(".nameBox p", {
    y: -200,
    duration: 0.5,
    delay: 1,
    opacity: 0,
})

gsap.from(".one p", {
    x: -100,
    duration: 0.5,
    delay: 2,
    opacity: 0
})

gsap.from(".two p", {
    x: 100,
    duration: 0.5,
    delay: 2,
    opacity: 0
})

// ################ Second Section GSAP ################

gsap.from(".aboutHead p", {
    scale: 1.5,
    duration: 1,
    scrollTrigger: {
        trigger: ".red",
        start: "top 85%",
        end: "top 70%",
        scrub: 1,
        // markers: true
    }
})

gsap.from(".leftbox img", {
    scale: 0,
    // opacity: 0,
    rotate: 270,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".leftbox img",
        start: "top 90%",
        end: "top 70%",
        scrub: 1,
        // containerAnimation: scrollTween,
        // markers: true
    }
})

// ###################### Third Section GSAP #########################

gsap.from(".pageHead p", {
    scale: 2,
    duration: 2,
    scrollTrigger: {
        trigger: ".orange",
        start: "top 80%",
        end: "top 60%",
        // containerAnimation: scrollTween,
        scrub: 1,
        // markers: true
    }
})

gsap.from(".p1", {
    // scale: 0,
    rotate: 270,
    opacity: 0,
    duration: 2,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".orange",
        start: "top 30%",
        end: "top 10%",
        // containerAnimation: scrollTween,
        scrub: 1,
        // markers: true
    }
})

gsap.from(".p2", {
    // scale: 0,
    rotate: 270,
    opacity: 0,
    duration: 2,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".orange",
        start: "top 30%",
        end: "top 10%",
        // containerAnimation: scrollTween,
        scrub: 1,
        // markers: true
    }
})

gsap.from(".p3", {
    // scale: 0,
    rotate: 270,
    opacity: 0,
    duration: 2,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".orange",
        start: "top 30%",
        end: "top 10%",
        // containerAnimation: scrollTween,
        scrub: 1,
        // markers: true
    }
})

// ################ Fourth Page GSAP #######################

gsap.from(".contacthead p", {
    scale: 1.4,
    duration: 2,
    scrollTrigger: {
        trigger: ".purple",
        start: "top 80%",
        end: "top 60%",
        // containerAnimation: scrollTween,
        scrub: 1,
        // markers: true
    }
})

gsap.from(".leftimg", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".purple",
        start: "top 30%",
        end: "top 10%",
        scrub: 1
    }
})

gsap.from(".cardbox", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".purple",
        start: "top 30%",
        end: "top 10%",
        scrub: 1
    }
})


// ################################## SVG Animation #############################
const typed = new Typed('.typed', {
    strings: ['Get a website that will make a lasting impression on your audience!!!'],
    typeSpeed: 50,
    // backSpeed: 50,
    backDelay: 1000,
    loop: true
});
// ################################## SVG Animation #############################

var link = document.getElementById("linked")

console.log(link.r.animVal.value);