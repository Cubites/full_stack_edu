// 비동기 동기화
'use strict';

let index1 =  '<p>하이퍼 텍스트 마크업 언어(영어: Hyper Text Markup Language, HTML, 문화어: 초본문표식달기언어, 하이퍼본문표식달기언어)는 웹 페이지를 위한 지배적인 마크업 언어다.</p>';
index1 += '<p>또한, HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 그리고 이미지와 객체를 내장하고 대화형 양식을 생성하는 데 사용될 수 있다.</p>';
index1 += '<p>HTML은 웹 페이지 콘텐츠 안의 꺾쇠 괄호에 둘러싸인 "태그"로 되어있는 HTML 요소 형태로 작성한다.</p>';
index1 += '<p>HTML은 웹 브라우저와 같은 HTML 처리 장치의 행동에 영향을 주는 자바스크립트와 본문과 그 밖의 항목의 외관과 배치를 정의하는 CSS 같은 스크립트를 포함하거나 불러올 수 있다. </p>';
index1 += '<p>HTML과 CSS 표준의 공동 책임자인 W3C는 명확하고 표상적인 마크업을 위하여 CSS의 사용을 권장한다.[1]</p>';


let index2 = '<p>종속형 시트 또는 캐스케이딩 스타일 시트(Cascading Style Sheets, CSS)는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어(style sheet language)로[1], HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다.</p>';
index2 += '<p>W3C의 표준이며, 레이아웃과 스타일을 정의할 때의 자유도가 높다.</p>';
index2 += '<p>기본 파일명[2]은 style.css이다.</p>'
index2 += '<p>마크업 언어(ex: HTML)가 웹사이트의 몸체를 담당한다면 CSS는 옷과 액세서리처럼 꾸미는 역할을 담당한다고 할 수 있다. </p>'
index2 += '<p>즉, HTML 구조는 그대로 두고 CSS 파일만 변경해도 전혀 다른 웹사이트처럼 꾸밀 수 있다.</p>'
index2 += '<p>현재 개발 중인 CSS3의 경우 그림자 효과, 그라데이션, 변형 등 그래픽 편집 프로그램으로 제작한 이미지를 대체할 수 있는 기능이 추가되었다. </p>'
index2 += '<p>또한 다양한 애니메이션 기능이 추가되어 어도비 플래시를 어느 정도 대체하고 있다.</p>'

function main(n){
    if(n == 1){
        document.getElementById('str').innerHTML = index1;
    }else{
        document.getElementById('str').innerHTML = index2;
    }
}

// 3초 후에 첫 화면이 실행되도록 하자.
// main은 setTimeout()의 인수로 전달된다. 3초 후에 main이 호출된다. callback
// setTimeout("main(1)", 3000); // 함수에 매개변수가 없는 경우 main이라고 함수명만 적어도 동작함
main(1);


// 실시간으로 바뀌는 지금 시간을 출력하시오.
function tFunc(){
    let dt = new Date();
    document.getElementById('mytime').innerHTML = `${dt.getHours()} : ${dt.getMinutes()} : ${dt.getSeconds()}`;
}
setInterval(tFunc, 1000);

// <h1 id="love"></h1>를 html에 만들고 5초 후에 I love you!를 출력하시오.
let lovetxt = document.createElement("h1");
document.body.prepend(lovetxt);
document.getElementsByTagName("h1").className += ' love';

function love(){
    document.getElementById('love').innerHTML = 'I love you!';
}
setTimeout(love, 5000);