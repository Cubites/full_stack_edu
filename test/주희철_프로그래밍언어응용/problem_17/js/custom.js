'use strict';

setInterval(slides, 3000);

let leftnum = 0;
function slides(){
    console.log(leftnum);
    let slides = document.getElementById('slides');
    let imgs = document.getElementsByTagName('img');
    
    leftnum -= 600;
    slides.animate({
        'left' : leftnum + 'px'
    }, 1000);
    if(leftnum >= -1800){
        leftnum == 0;
        slides.style.left = 0;
    }
    console.log(slides.style.left);
    slides.style.left = leftnum;
}
