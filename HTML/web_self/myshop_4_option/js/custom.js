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

// option
let goldweight = 0;
function selectGoods(w){
    goldweight = w;
    fetch("../json/db.json")
        .then(rs => rs.json())
        .then(data => {
            let pr2Inner = `<option value="">-[필수] 옵션을 선택해 주세요 - </option>`;
            let optionValue = (w == 14 ? data.option14 : data.option18);
            for(let i in optionValue){
                pr2Inner += `<option value="${i}">${optionValue[i]}</option>`;
            }
            document.getElementById("pr2").innerHTML = pr2Inner;
        })
}

const defaultprice = 99900;
function cartIn(pr2index){
    let cartGoods = "";
    fetch("../json/db.json")
        .then(rs => rs.json())
        .then(data => {
            let selectgold = (pr2index == 14 ? data.option14 : data.option18);
            let selectsize = (pr2index == 14 ? data.price14 : data.price18);
            if(pr2index != ""){
                cartGoods = `
                <div>
                    <div class="infoCartGoods">
                        <p>14K/18K 비쥬팝 폴레르 양면 팔찌 [특가판매]</p>
                        <p>18K옐로우골드/${selectgold[pr2index]}</p>
                    </div>
                    <div class="quantity">
                        <p>1</p>
                        <div class="updownbtn">
                            <div class="upbtn" onclick="updown(event, 1)">▲</div>
                            <div class="downbtn" onclick="updown(event, -1)">▼</div>
                        </div>
                    </div>
                    <div class="select-price">
                        <p>${defaultprice + selectsize[pr2index]}원</p>
                        <div>(<span>P</span> ${(defaultprice + selectsize[pr2index]) * 0.05}원)</div>
                    </div>
                </div>
                `;
            }
            document.getElementById("cart").innerHTML += cartGoods;
            totalPrice();
        });    
}

function updown(e, n){
    let btn;
    if(n == 1){
        btn = document.querySelectorAll('#cart .quantity .updownbtn .upbtn');
    }else{
        btn = document.querySelectorAll('#cart .quantity .updownbtn .downbtn');
    }
    let goodsIndex = Array.from(btn).indexOf(e.target);
    let quantity = document.querySelectorAll('#cart .quantity p')[goodsIndex];
    let count = Number(quantity.innerHTML) + Number(n);
    if(count < 1){
        alert("최소 1개의 수량을 입력해야합니다.");
    }else{
        quantity.innerHTML = count;
    }
    totalPrice();
}

function totalPrice(){
    let quantity = document.querySelectorAll('#cart .quantity p');
    let price = document.querySelectorAll('#cart .select-price p');
    let finalPrice = 0;
    for(let i in Array.from(quantity)){
        let a = Number(quantity[i].innerHTML);
        let b = Number(price[i].innerHTML.replace(",", "").replace("원", ""));
        finalPrice += a * b;
    }
    document.getElementById('total-price').innerHTML = priceToString(finalPrice) + "원";
}

function priceToString(price){
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}