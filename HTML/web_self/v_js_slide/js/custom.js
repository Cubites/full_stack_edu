'use strict';

setInterval("slideMove(appen)", 3000);

let leftnum = 0;
let slides = document.getElementById('slides');

let appen = function(){
    let fimg = slides.firstElementChild;
    slides.append(fimg); // 추가가 아닌 해당 요소를 옮기는 것
}

function slideMove(callback){
        
    leftnum -= 600;
    let anim = slides.animate([
        {left: '0px'},
        {left: '-600px'}
    ], {
        duration: 1000,
        fill: 'forwards'
    });

    callback();
    
    // anim.commitStyles();
    // if(leftnum <= -1800){
    //     console.log('leftnum reset');
    //     leftnum = 0;
    //     slides.style.transform = `translateX(0px)`;
    // }
    // console.log(leftnum);
    // console.log(slides.style.transform);
}
