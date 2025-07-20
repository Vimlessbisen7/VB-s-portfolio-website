
function valueSetters(){

   gsap.set("#nav a",{y:"-100%",opacity:0});
   gsap.set("#home span .child",{y:"100%"});
   gsap.set("#home .row img",{opacity:0});

}

function reveal2Span (){
   document.querySelectorAll(".reveal").forEach (function(elem){

   let spanParent = document.createElement("span");
   let spanChild = document.createElement("span");

   spanParent.classList.add ("parent");
   spanChild.classList.add("child");

   spanChild.innerHTML= elem.innerHTML;
   spanParent.appendChild(spanChild);
   elem.innerHTML = "";
   elem.appendChild(spanParent);
});
}




function loaderAnimaton(){


   var tl = gsap.timeline();

tl
.from("#loader .child span",{
   x:100,
   duration:1.5,
   stagger:.2,
   ease:"power3.easeInOut",   
})


.to("#loader .parent .child",{
   y:"-100%",
   duration:1,
   ease: "circ.easeInOut",   
})

.to ("#loader",{
   duration:1,
   height:0,
   ease:"circ.easeInOut",
})

.to("#green",{
   duration:0.8,
   top:0,
   delay:-1,
   height:"100%",
   ease:"cric.easeInOut",
})

.to("#green",{
   duration:0.7,
   delay:-0.5,
   height:"0%",
   ease:"cric.easeInOut",
   onComplete:function(){
   animationHomepage();
  
  
   }
})


}


function animationHomepage(){


   var tl = gsap.timeline();
   tl.to("#nav a",{
      y:0,
   opacity:1,
stagger:.05,
ease:"Expo.easeInOut"
   })

    tl.to("#home .parent .child",{
      y:0,
stagger:.2,
ease:"Expo.easeInOut",
duration:1.2,
delay:-0.09,
   })

   tl.to("#home .row img",{
   opacity:1,
delay:-0.5,
ease:"Expo.easeInOut",
onComplete:function(){
   animateMern(); 

}

   })


   tl.to("#imaginary", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

}







  function animateMern() {
  var tl = gsap.timeline();


  tl.to("#home .row #svgImg", {
    y: 0,
   //  ease: "expo.inOut",
   scale: 0.94,
    duration: 2,
    opacity:1,
    delay: -0.1,
     stagger: {
    grid: [7,15],
    from: "center",
    amount: 1.5
  }

   });

  // Animate h3 letters (MERN)
  tl.to("#svgImg h3", {
    y: 0,
    opacity: 1,
    stagger: 0.7,
    ease:"power4.inOut",
    duration: 1
  }, "-=1.5");

  // Animate h4 letters (STACK)
  tl.to("#svgImg h4", {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    ease:"Expo.easeInOut",
    scale:1,
    duration: 1,
  }, "-=1.3"); // slight overlap
  }




function locoAnimation(){

   const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.1,
});

}



function mousemovement() {
   window.addEventListener("mousemove",function(dets){
      this.document.querySelector("#miniCursor").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`;

   }
)};
  
mousemovement();



document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diffrot = 0;

elem.addEventListener("mouseleave", function (dets){
  gsap.to(elem.querySelector("img"), {
    opacity: 0,
    ease: "power3",
  });
});



  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: "power3",
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      
    });
  });
});


function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("current-time").textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();


 window.addEventListener("DOMContentLoaded", () => {
  reveal2Span();
  valueSetters();
  loaderAnimaton();
  locoAnimation();
 
  
 
});

