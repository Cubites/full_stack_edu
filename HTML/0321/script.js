//1. 객체 리터럴을 이용해서 바로 객체를 생성
// 객체 리터럴은 유연함, 강력함을 갖는 자바스크립트의 대표적 객체 생성 방법
// 클래스 정의나 new 연산자없이 손쉽게 객체를 생성
let person = {
    name : "철수",
    sayHello : function(){
        console.log(`${this.name}이(가) 안녕하세요?라고 말했습니다.`);
    }
}
person.sayHello();

console.log("---------2---------");
// 2. Object() 생성자 함수 : new 키워드를 이용하여 Object 생성자 함수를 호출하면 비어있는 객체를 얻을 수 있음
let person2 = new Object();
console.log(person2.name);
console.log(person2.email);
console.log(person2.birth);

person2.name = "홍길동";
person2.email = "asdf@example.com";
person2.birth = "1665.12.31";

console.log(person2.name);
console.log(person2.email);
console.log(person2.birth);

console.log("---------3---------");
// 3. 생성자 함수 : 일반함수와 구분하기 위해 첫자를 대문자로 사용
function Person(name, email, birth){
    this.name = name;
    this.email = email;
    this.birth = birth;
}
const person3 = new Person("안철수", "asf@asdf.com", "1955.12.31");
console.log(person3.name);
console.log(person3.email);
console.log(person3.birth);

console.log("---------3 예제---------")
// 3. 예제 - 사람의 평균 몸무게를 점검해주는 생성자 함수를 만들어 보자.
// 자신의 몸무게가 (키 - 100) * 0.9 에 +-5 안에 들어가면 정상, 많으면 비만, 적으면 미달 출력
function CheckWeight(name, height, weight){
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;

    this.getInfo = function(){
        return `이름: ${this.userName}, 키: ${this.userHeight}, 몸무게: ${this.userWeight}`;
    }
    this.getResult = function(){
        this.minWeight = (this.userHeight - 100) * 0.9 - 5;
        this.maxWeight = (this.userWeight - 100) * 0.9 + 5;
        if(this.userWeight < this.minWeight){
            return "몸무게가 미달입니다.";
        }else if(this.userWeight <= this.maxWeight){
            return "정상 몸무게입니다.";
        }else{
            return "비만입니다.";
        }
    }
}

var hong = new CheckWeight("홍길동", 181, 100);
console.log(hong.getInfo());
console.log(hong.getResult());