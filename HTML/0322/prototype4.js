// o라는 객체가 있고 property로 a와 b를 갖음
let f = function(){
    this.a = 1;
    this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// f 함수의 prototype에 새로운 속성을 추가
f.prototype.b = 3;
f.prototype.c = 4; // f.prototype = {b: 3, c: 4} (한번에 입력)(X) -> prototype chain을 망가트림

console.log(o.a); // 1
console.log(o.b); // 2

// prototype도 b라는 속성을 갖지만 이 값은 사용되지 않음 prototype shadowing

console.log(o.c); // 4
console.log(o.d); // undefined