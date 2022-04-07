'use strict';

   //memory
    fetch('./json/shop.json')
    .then( reson => reson.json())
    .then( rs => {
        //console.log(rs);
        let dt = rs.list;
        let txt ='';
        let cart = '';
        for(let r of dt) {   // for in , for of , foreach 
            txt += `<div class="col-3">
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
        </div>`;
        }
        if(getCookie('num')){
            let rsCart = getCookieArray('num');
            for(let rc of rsCart) {
                cart += `
                <div class="shop-cart-card">
                <div class="shop-img">
                    <img src="images/${dt[rc-1].img}" alt="${dt[rc-1].img}">
                </div>
                <div class="shop-subject">
                    <h3>${dt[rc-1].title}</h3>
                    <p>${dt[rc-1].pr}</p>
                </div>
                <span class="close" onclick="removeCookie(${rc-1})"></span>
                </div>
                `;                              
            }
            document.getElementById("mycart").innerHTML = cart;

        }
        document.getElementById("shop").innerHTML = txt;
    });



   let c;
//    if(getCookie('num')){
//       c = getCookieArray('num');
//       console.log(c)
//    }
 
    if(getCookie('num')){
        let cart = getCookieArray('num');
        //console.log(cart);
    }

    function cart(e) {
        if(getCookie('num')){  //쿠키에 num이 있는지 확인
            c = getCookie('num');  
            if(c != e) {  //만약에 있다면 기존 쿠키값에 새로 번호를 추가한다.
                c = c + "," + e;
            }
        }else{
            c = e;
        }   
        setCookie('num', c,  1);
        document.location.reload();
    }
   
//    function setCookieArray(uname, uarray, exday) {
//        let str = "";
//        for (let key in uarray) {
//            if(str != "") str += ",";
//            str += key + ":" + uarray[key];
//        }
//        setCookie(uname, str, exday);
//    }
   
   //쿠키를 저장
  
    function setCookie(uname, uvalue, exday) {
        const d = new Date();
        d.setTime(d.getTime() + ( exday*24*60*60*1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = uname + "=" + uvalue + ";" + expires + ";path=/";
    }

    function getCookieArray(uname) {
        let str = getCookie(uname);  
        let tmp1 = str.split(",");
        // let reData = {};
        // for(let i in tmp1) {
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
            if(c.indexOf(name) == 0 ){
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    //cookie 지우기
    function removeCookie(e){
        let ck = getCookieArray('num');
  
        if(ck.length > 1) {  //배열값 num 중 선택된 값을 빼고 저장
            for(let i in ck){

                if(ck[i] == (e+1)) {          
                    ck.splice(i, 1);
                    i--;
                }
            }
            let cck = ck.join(",");
            setCookie('num', cck, 1);
        
        }else {  //쿠키를 삭제
           document.cookie = 'num = ; expires=Thu, 01 Jan 1999 00:00:10 GMT';  
        }
        document.location.reload();
    }