'use strict';


let leftnum = 0;
let slides = document.getElementById('slides');

let appen = function(){
    let fimg = slides.firstElementChild;
    slides.append(fimg); // 추가가 아닌 해당 요소를 옮기는 것
}

function slideMove(){
        
    leftnum -= 600;
    let anim = slides.animate([
        {left: '0px'},
        {left: '-600px'}
    ], {
        duration: 1000,
        // fill: 'forwards'
    });
    
    anim.onfinish = () => appen();
}

setInterval("slideMove(appen)", 3000);