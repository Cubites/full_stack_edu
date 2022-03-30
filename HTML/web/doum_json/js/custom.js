'use strict';
var ind = 1;
viewSlide(ind);

// window.addEventListener('scroll', function(){
//    let nowScroll =  document.scrollingElement.scrollTop;  
//    //scrollingElement.scrollTop 스크롤된곳의 위치값
//    if(nowScroll > 600) {
//        document.getElementById("top").style.display = 'flex';
//    }
//    if(nowScroll == 0) {
//     document.getElementById("top").style.display = 'none';
//    }
//    console.log(nowScroll);
// });

function gTime(){
   var dt = new Date();
   var yr = dt.getFullYear();
   var mth = dt.getMonth()+1;
   var gdt = dt.getDate();
   var hour = dt.getHours();
   var minu = dt.getMinutes();
   var sec = dt.getSeconds();

    document.getElementsByClassName('dt')[0].innerHTML = yr+"."+mth+"."+ gdt +" <span>"+hour+ "시 " +minu+ "분 " +sec+"초</span>";
}
function pSlide(n){
    viewSlide(ind += n);
}

setInterval(autoSlide, 5000);
setInterval(gTime, 1000);
function viewSlide(n){
    var i, slides;
    slides = document.getElementsByClassName("slidein");
    if(n > slides.length) ind = 1;
    if(n < 1) ind = slides.length;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        slides[i].className = "slidein";
    }

    // var elements = document.getElementsByTagName('li');
    // for(i=0; i<4; i++){
    //     elements[i].classList.remove('active');
    // }
    //var ct = Math.floor(Math.random()*4);
    //console.log(ct);
    //elements[ct].className = "active";


    slides[ind-1].style.display="block";
    slides[ind-1].className += " fade";
}


function autoSlide(){
    ind++;     
    viewSlide(ind);
}

function openNav(){
   document.getElementById("mynav").style.left="0%";
}

function closeNav(){
   document.getElementById("mynav").style.left="-100%";
}

function vl(n){
    let page = document.getElementById("page");
    let supportBoxa = document.querySelector(".support-boxa");
    let supportBoxb = document.querySelector(".support-boxb");
    if(n){
        //page 0의 action 을 지우고 support-boxa action을 지운다.
        //page 1에 action 을 넣고 support-boxb action을 추가한다.
        page.children[0].classList.remove("action");
        page.children[1].classList.add("action");
        supportBoxa.classList.remove("act");
        supportBoxb.classList.add("act");
    }else{
        page.children[1].classList.remove("action");
        page.children[0].classList.add("action");
        supportBoxb.classList.remove("act");
        supportBoxa.classList.add("act");
    }
}

//json - bestCafe
const bestCafe = document.getElementById("bestCafe");
fetch('../json/bestcafe.json')
    .then(resolve => resolve.json())
    .then(rs => {
        // console.log(rs);
        let cnode = "";
        for(let r of rs.list){
            let hashArr = r.hash.split(",");
            let csnode = "";
            for(let i in hashArr){
                csnode += (i == 0) ? `<span class="act">${hashArr[i]}</span>` : `<span>${hashArr[i]}</span>`;
            }
            cnode += `
                <div class="col-4 col-tb-6 py-15">
                    <a href="#" class="card">
                        <div class="img-thumb style="background-image: url(images/${r.img});"></div>
                        <div class="card-contents">
                            <h3 class="ellipsis">${r.title}</h3>
                            <p class="title-info ellipsis">${r.desc}<p>
                            <p class="hash ellipsis">
                                ${csnode}
                            </p>
                        </div>
                    </a>
                </div>
            `;
        }
        bestCafe.innerHTML = cnode;
    })
    .catch(error => console.log(error));

const cafepop = document.getElementsByClassName("list-pop")[0];
fetch('../json/bestcafe.json')
    .then(resolve => resolve.json())
    .then(rs => {
        let pnode = "";
        for(let r of rs.pop){
            pnode += `
            <li>
                <a href="#" target="_blank" class="list">
                    <div class="row align-item-center">
                        <div class="img-thumb2 col-2">
                            <img src="images/${r.img}" alt="${r.img}">
                        </div>
                        <div class="contents-pop col-6">
                            <h3 class="ellipsis"><strong>${r.lank}</strong> ${r.title} <h3>
                        </div>
                        <div class="cafe-pop col-2">
                            <p class="ellipsis"> ${r.cafeName} </p>
                        </div>
                        <div class="sub-pop col-2">
                            <p>댓글 <span>${r.review}</span></p>
                        </div>
                    </div>
                </a>
            </li>
            `;
        }
        cafepop.innerHTML = pnode;
    })
    .catch(error => console.log(error));

