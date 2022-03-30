'use strict';

setInterval(slideMove, 3000);

let leftnum = 0;
let slides = document.getElementById('slides');
function slideMove(){
        
    leftnum -= 600;
    let anim = slides.animate([
        {transform: `translateX(${leftnum}px)`}
    ], {
        duration: 1000
    });
    
    anim.commitStyles();
    if(leftnum <= -1800){
        console.log('leftnum reset');
        leftnum = 0;
        slides.style.transform = `translateX(0px)`;
    }
    console.log(leftnum);
    console.log(slides.style.transform);
}

// let img = document.getElementsByTagName('img')[0];
// let slides = document.getElementById('slides');
// console.log(img);
// console.log(slides);
// let slides2 = img[0].removeChild(slides);
// console.log(slides2);