// Shape - 상위 클래스
function Shape(){
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function(x, y){
    this.x += x;
    this.y += y;
    console.log("도형이 움직였습니다.");
}

// 하위 클래스 (사각형)
function Rectangle(){
    Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
console.log(Rectangle.prototype);

// Shape{} -> 빈 객체 // 이전에는 constructor 프로퍼티가 있는 객체

console.log(Rectangle.prototype.__proto__);
// move:f move 메소드가 확인

var oo = {
    a : 2,
    m : function(b){
        return this.a + 1;
    }
}
console.log(oo.m());

let p = Object.create(oo); // p는 프로토타입을 oo로 가지는 object
console.log(p.a);
p.a = 12; // p에 있는 a값 재 정의
console.log(p.m()); 
// p.m이 호출될 때 this는 p를 가리킴
// 따라서 o의 함수 m을 상속 받으며, this.a는 p.a를 나타내며 p의 개인 속성 a가 됨