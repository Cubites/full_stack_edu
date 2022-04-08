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
    // let arrows = document.getElementsByClassName('arrow');
    let arrows = document.querySelectorAll('.bimg i');
    arrows.forEach((arrow) => {
        arrow.onclick = (e) => {
            // let index = [].indexOf.call(arrows, e.target);
            let index = Array.from(arrows).indexOf(e.target);
            console.log(arrows);
            console.log(Array.from(arrows));
        }
    })

    // bimg>img click
    let bimgpopup = document.getElementById("bimg-popup");
    bimg_img.onclick = () => {
        bimgpopup.style.display = "block";
    }

    // bimg popup
    let popclose = document.getElementById("original-image");
    popclose.onclick = () => {
        bimgpopup.style.display = "none";
    }
    
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

/* select opt */
function optChange(e){
    document.getElementById('total').innerHTML = '';
    document.getElementById('total-price').innerHTML = '';
    let jy14k = [
        {key: '', val: '사이즈를 입력하세요'},
        {key: '15.5cm+2.5cm||0||14k 옐로우 골드', val: '15.5cm+2.5cm'},
        {key: '16.5cm+2.5cm||0||14k 옐로우 골드', val: '16.5cm+2.5cm'},
        {key: '17.5cm+2.5cm||3000||14k 옐로우 골드', val: '17.5cm+2.5cm (+3000원)'},
        {key: '18.5cm+2.5cm||6000||14k 옐로우 골드', val: '18.5cm+2.5cm (+6000원)'},
        {key: '19.5cm+2.5cm||9000||14k 옐로우 골드', val: '19.5cm+2.5cm (+9000원)'}
    ];
    let jp14k = [
        {key: '', val: '사이즈를 입력하세요'},
        {key: '15.5cm+2.5cm||0||14k 핑크 골드', val: '15.5cm+2.5cm'},
        {key: '16.5cm+2.5cm||0||14k 핑크 골드', val: '16.5cm+2.5cm'},
        {key: '17.5cm+2.5cm||3000||14k 핑크 골드', val: '17.5cm+2.5cm (+3000원)'},
        {key: '18.5cm+2.5cm||6000||14k 핑크 골드', val: '18.5cm+2.5cm (+6000원)'},
        {key: '19.5cm+2.5cm||9000||14k 핑크 골드', val: '19.5cm+2.5cm (+9000원)'}
    ];
    let jw14k = [
        {key: '', val: '사이즈를 입력하세요'},
        {key: '15.5cm+2.5cm||0||14k 화이트 골드', val: '15.5cm+2.5cm'},
        {key: '16.5cm+2.5cm||0||14k 화이트 골드', val: '16.5cm+2.5cm'},
        {key: '17.5cm+2.5cm||3000||14k 화이트 골드', val: '17.5cm+2.5cm (+3000원)'},
        {key: '18.5cm+2.5cm||6000||14k 화이트 골드', val: '18.5cm+2.5cm (+6000원)'},
        {key: '19.5cm+2.5cm||9000||14k 화이트 골드', val: '19.5cm+2.5cm (+9000원)'}
    ];
    let jy18k = [
        {key: '', val: '사이즈를 입력하세요'},
        {key: '15.5cm+2.5cm||41900||18k 옐로우 골드', val: '15.5cm+2.5cm (+41900원)'},
        {key: '16.5cm+2.5cm||41900||18k 옐로우 골드', val: '16.5cm+2.5cm (+41900원)'},
        {key: '17.5cm+2.5cm||45900||18k 옐로우 골드', val: '17.5cm+2.5cm (+45900원)'},
        {key: '18.5cm+2.5cm||49900||18k 옐로우 골드', val: '18.5cm+2.5cm (+49900원)'},
        {key: '19.5cm+2.5cm||53900||18k 옐로우 골드', val: '19.5cm+2.5cm (+53900원)'}
    ];
    let jp18k = [
        {key: '', val: '사이즈를 입력하세요'},
        {key: '15.5cm+2.5cm||41900||18k 핑크 골드', val: '15.5cm+2.5cm (+41900원)'},
        {key: '16.5cm+2.5cm||41900||18k 핑크 골드', val: '16.5cm+2.5cm (+41900원)'},
        {key: '17.5cm+2.5cm||45900||18k 핑크 골드', val: '17.5cm+2.5cm (+45900원)'},
        {key: '18.5cm+2.5cm||49900||18k 핑크 골드', val: '18.5cm+2.5cm (+49900원)'},
        {key: '19.5cm+2.5cm||53900||18k 핑크 골드', val: '19.5cm+2.5cm (+53900원)'}
    ];
    let jw18k = [
        {key: '', val: '사이즈를 입력하세요'},
        {key: '15.5cm+2.5cm||41900||18k 화이트 골드', val: '15.5cm+2.5cm (+41900원)'},
        {key: '16.5cm+2.5cm||41900||18k 화이트 골드', val: '16.5cm+2.5cm (+41900원)'},
        {key: '17.5cm+2.5cm||45900||18k 화이트 골드', val: '17.5cm+2.5cm (+45900원)'},
        {key: '18.5cm+2.5cm||49900||18k 화이트 골드', val: '18.5cm+2.5cm (+49900원)'},
        {key: '19.5cm+2.5cm||53900||18k 화이트 골드', val: '19.5cm+2.5cm (+53900원)'}
    ];
    let val = e.value;
    let pr2 = document.getElementById('pr2');
    pr2.options.length = 0;

    if(val != ""){
        switch(val){
            case 'jy14k':
                for(let i in jy14k){
                    // console.log(jy14k[i].key, jy14k[i].val);
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jy14k[i].key);
                    opt.innerText = jy14k[i].val;
                    pr2.appendChild(opt);
                }
            break;  
            case 'jp14k':
                for(let i in jy14k){
                    // console.log(jy14k[i].key, jy14k[i].val);
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jp14k[i].key);
                    opt.innerText = jp14k[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case 'jw14k':
                for(let i in jy14k){
                    // console.log(jy14k[i].key, jy14k[i].val);
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jw14k[i].key);
                    opt.innerText = jw14k[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case 'jy18k':
                for(let i in jy14k){
                    // console.log(jy14k[i].key, jy14k[i].val);
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jy18k[i].key);
                    opt.innerText = jy18k[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case 'jp18k':
                for(let i in jy14k){
                    // console.log(jy14k[i].key, jy14k[i].val);
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jp18k[i].key);
                    opt.innerText = jp18k[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case 'jw18k':
                for(let i in jw18k) {
                    //console.log(j18k[i].key, j18k[i].val);
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jw18k[i].key);
                    opt.innerText = jw18k[i].val;
                    pr2.appendChild(opt);
                }
            break; 
            
        }
    }
}

function opt2Change(e){
    let val = e.value;
    let vals = val.split("||");
    let prTitle = document.getElementsByClassName("item_title")[0].innerHTML;
    let pprice = document.getElementById("pprice").value;
    prTitle = `
        <div class="vbox">
            <p class="product-title">${prTitle}</p>
            <span>${vals[2]} / ${vals[0]}</span>
        </div>
        <div class="addbox">

        </div>
        <div class="prbox">
            ${Number(pprice) + Number(vals[1])} 원 <br>
            <p class="point">(<span>P</span> ${(Number(pprice) + Number(vals[1]))*0.05})<p>
        </div>
    `;
    document.getElementById("total").classList.add('total-inner');
    document.getElementById("total").innerHTML = prTitle;
    document.getElementById('total-price').innerHTML = priceToString(Number(pprice) + Number(vals[1])) + '원';
    // console.log('사이즈' + vals[0]);
    // console.log('가격' + vals[1]);
    // console.log('종류' + vals[2]);
    // let divinn = "";
    // let totalbox = document.getElementById('total');
    // document.getElementById("total").innerHTML += div;
}

function priceToString(price){
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}