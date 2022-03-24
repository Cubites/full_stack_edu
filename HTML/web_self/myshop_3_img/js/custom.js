'use strict';

// mouseover, mouseout <---> mouseenter, mouseleave

// script dom 객체 로드 문제시 해결법(그외 : defer 등등)
window.onload = function(){
    let myshop = document.getElementById("myshop");
    let allshop = document.getElementById("all");
    let elem = document.getElementsByClassName('all')[0];

    allshop.addEventListener("mouseenter", function(){
        let bar = document.getElementsByClassName('bar');
        allshop.classList.add('first-over');
        for(let i = 0; i < 3; i++){
            allshop.children[i].classList.remove('bar');
            allshop.children[i].classList.add('barover');
        }
        fadeInOut(elem, 'flex');
    }) 
    elem.addEventListener("mouseleave", function(){
        let barover = document.getElementsByClassName('barover');
        if(barover){
            allshop.classList.remove('first-over');
            for(let i = 0; i < 3; i++){
                allshop.children[i].classList.remove('barover');
                allshop.children[i].classList.add('bar');
            }
            fadeInOut(elem, 'none');
        }
    })

    // nav toggle
    let gnb = document.getElementsByClassName('gnb')[0]
    let gnb_li = document.querySelectorAll('.gnb>li')
    // gnb_li.addEventListener("mouseenter", function(){

    // })

    // image arrow toggle
    let bimg = document.getElementsByClassName('bimg')[0]
    let arrow = document.getElementsByClassName('arrow');

    bimg.addEventListener("mouseenter", function(){
        for(let i = 0; i < arrow.length; i++){
            fadeInOut(arrow[i], 'block');
        }
    })
    bimg.addEventListener("mouseleave", function(){
        for(let i = 0; i < arrow.length; i++){
            fadeInOut(arrow[i], 'none');
        }
    })

    // simg>img hover
    let bimg_img = document.querySelector('.bimg>img');
    let simgs = document.querySelectorAll('.simg img');
    simgs.forEach((simg) => {
        simg.addEventListener('mouseenter', (e) => {
            let index = [].indexOf.call(simgs, e.target);
            bimg_img.src = simg.src;
        })
    })


    // slide when clicked arrow
    let arrows = document.querySelectorAll('.bimg>arrow');
    arrows.forEach((arrow, index) => {
        arrow.onclick = () => {
            console.log(arrow);
        }
    })

    // bimg>img click
    let bimgpopup = document.getElementById("bimg-popup");
    bimg_img.onclick = () => {
        bimgpopup.style.display = "block";
    }

    // bimg popup
    document.addEventListener('mouseenter',)
    
}

function getElementIndex(element, range) {
    // 추가
    if (!!range) return [].indexOf.call(element, range);
    return [].indexOf.call(element.parentNode.children, element);
  }

function fadeInOut(elem, disp){
    if(! elem) return;
    if(disp == 'none'){
        elem.classList.remove('fadeIn');
        elem.classList.add('fadeOut');
        elem.style.display = disp;
    }else{
        elem.classList.remove('fadeOut');
        elem.style.opacity = 0;
        elem.style.display = disp;
        elem.classList.add('fadeIn');
    }
}
