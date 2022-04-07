'use strict';
    
fetch('./json/shop.json')
    .then(reson => reson.json())
    .then(rs => {
        let dt = rs.list;
        let txt = '';
        for(let r of dt){
            txt += `
            <div class="col-3">
                <div class="shop-card">
                    <div class="shop-img">
                        <img src="images/${r.img}" alt="t01">
                    </div>
                    <div class="shop-subject">
                        <h3>${r.title}</h3>
                        <p>${r.pr}</p>
                        <button class="btn-cart" onclick="cart(${r.num})">장바구니</button>
                    </div>
                </div>
            </div>
            `
        }
        if(getCookie('num')){
            let rsCart = getCookieArray('num');
            let cartList = "";
            for(let rc of rsCart){
                cartList += `
                <div class="shop-cart-card">
                    <div class="shop-img">
                        <img src="images/${dt[rc - 1].img}" alt="t01">
                    </div>
                    <div class="shop-subject">
                        <h3>${dt[rc - 1].title}</h3>
                        <p>${dt[rc - 1].pr}</p>
                    </div>
                    <span class="close" onclick="exitCart(event)"></span>
                </div>
                `;
            }
            document.getElementsByClassName("cart")[0].innerHTML = cartList;
        }
        document.getElementById("shop").innerHTML = txt;
    })

let c;
if(getCookie('num')){
    let cart = getCookieArray('num');
    // console.log(cart)
}

function cart(e){
    if(getCookie('num')){ // 쿠키에 num이 있는지 확인
        c = getCookie('num');
        if(c != e){ // 만약에 있다면 기존 쿠키값에 새로 번호를 추가
            c = c + ',' + e;
        }
    }else{
        c = e;
    }
    setCookie('num', c, 1);
    document.location.reload();
}

//쿠키를 저장
function setCookie(uname, uvalue, exday) {
    const d = new Date();
    d.setTime(d.getTime() + ( exday*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = uname + "=" + uvalue + ";" + expires + ";path=/";
}

function getCookieArray(uname){
    let str = getCookie(uname)
    let tmp1 = str.split(",");
    // let reData = {};
    // for(let i in tmp1){
    //     let tmp2 = tmp1[i].split(":");
    //     reData[tmp2[0]] = tmp2[1];
    // }
    return tmp1;
}

//저장된 쿠키를 가져옴
function getCookie(uname) {
    let name = uname + "=";
    let dCookie = decodeURIComponent(document.cookie);  //특수 문자 처리
    let ca = dCookie.split(";");  // ;를 구분해서 ca배열로 분리
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function exitCart(e){
    let cart = document.querySelectorAll(".shop-cart-card span");
    let goodsIndex = Array.from(cart).indexOf(e.target);
    let cartGoods = getCookie('num').split(",");
    cartGoods.splice(goodsIndex, 1);
    let cvalue = "";
    for(let i of cartGoods){
        cvalue += "," + i;
    }
    setCookie('num', cvalue.substring(1, cvalue.length), 1);
    location.reload();
}