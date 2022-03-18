'use strict';
// Javascript class
// 1. 클래스의 필수 가족 (생성자와 메소드)
class Person{
    //생성자
    constructor(name, age){
        // field (속성)
        this.name = name;
        this.age = age;
    }
}

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color`);
    }
    
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{} // 상속
class Triangle extends Shape{
    draw(){
        console.log('삼각형'); // 재정의 된 메소드
        super.draw(); // 부모 메소드에 있는 것을 가져옴
    }
    getArea(){ // 함수를 재 정의함 = override (다형성)
        return this.width * this.height / 2;
    }
    toString(){
        return `이 ${this.color}색의 삼각형은 object 의 상속을 받습니다.`
    } // 오버라이딩
}

const myRect = new Rectangle(20, 20, '파랑');
myRect.draw();
console.log(myRect.getArea());

const myTri = new Triangle(20, 20, '빨강');
myTri.draw();
console.log(myTri.getArea());
console.log(myTri.toString());

// 클래스의 타입체킹 instanceOf
console.log(myRect instanceof Rectangle); // True
console.log(myTri instanceof Rectangle); // False
console.log(myTri instanceof Triangle); // True
console.log(myTri instanceof Shape); // True
console.log(myTri instanceof Object); // True

// 자바스크립트의 다양한 객체 생성 방법