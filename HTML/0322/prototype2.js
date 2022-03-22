function Person(){}

let chulsu = new Person();
let sooni = new Person();

Person.prototype.getType = function(){
    return "인간";
}

chulsu.age = 30;
console.log(chulsu.age); // = 30
console.log(sooni.age); // = undefined

console.log('프로토타입에 age라는 객체를 추가하면 상속받응 모든 객체에 적용됨');
Person.prototype.age = 30;
console.log(chulsu.age); // = 30
console.log(sooni.age); // = undefined

console.log('프로토타입에서 추가된 getType();을 모두 이용할 수 있음');
console.log(chulsu.getType());
console.log(sooni.getType());
