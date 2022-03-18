'use strict';

//arrow function;
const add = function(a, b){
    return a + b;
}
// 화살표 함수로 만들어 보기
/* 
    화살표 함수에서는 function을 사용하지 않음. 바로 ()를 쓰면 됨 
    () 다음에 화살표를 만들고 코드를 작성.
    만약 return을 써야할 경우에는 {}를 만들어도 됨
*/
const add2 = (a, b) => a + b;

// 함수 바로 실행 방법 : 괄호로 양끝을 감싸면 됨
(function hello(){
    console.log('반갑습니다.');
})();

/* 
    calculate 함수 만들기. command, a, b 세가지를 매개변수로 받아
    더하기, 빼기 곱하기, 나누기, 나머지를 계산해 주는 함수 만들기
*/
const calculate = (command, a, b) =>{
    switch(command){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            throw Error('계산 명령이 틀렸습니다.');
    }
}
console.log(calculate('/', 20, 5));