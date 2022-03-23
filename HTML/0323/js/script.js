function myDom(num){
    document.getElementById("mycar").innerHTML = num;
}

// ---- 함수의 실행순서 확인 ----
// function myDom(txt){
//     document.getElementById("mycar").innerHTML = txt;
// }
// function fFunc(){
//     myDom("안녕하세요?");
// }
// function sFunc(){
//     myDom("안녕히 계세요.");
// }

// sFunc(); // 안녕히 계세요.
// fFunc(); // 안녕하세요?
// // >> 함수는 순서대로 실행됨을 알 수 있음

// ---- callback 연습 ----
// 변수 두 개를 받아서 합을 출력하는 함수를 만들어 화면에 출력하세요.
// function calculator(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }
// let rs = calculator(5, 7);
// myDom(rs);

// 두 개의 함수를 호출시키는 방법 / callback 연습
// function calculator(num1, num2){
//     let sum = num1 + num2;
//     myDom(sum);
// }
// calculator(5, 8);

// callback 함수 (dom의 실행 순서 때문에 존재)
function calculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}

calculator(5, 1, myDom);







