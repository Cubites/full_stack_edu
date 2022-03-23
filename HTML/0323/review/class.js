// 아래 조건에 맞도록 클래스를 제작하세요.

// 1. 자동차 클래스를 만든다.  
//    브랜드 변수를 받아 생성자 carname 에 등록한다.
//    메소드를 '내 차는 carname 입니다. 라고 리턴하도록 한다.

// 2. 모델클래스를 만들고 자동차클래스를 상속받는다.
//    생성자 변수로 브랜드와 모델을 받는다.
//    생성자에 브랜드는 부모값을 상속받고 모델변수를 새로 등록한다.
//    메소드로 부모메소드이름 + , 모델은 model 입니다. 로 리턴하도록 한다.

//    myCar 를 생성하고  모델클래스의 메소드를 출력한다.

class Car{
    constructor(brand){
        this.carname = brand;
    }
    mytalk(){
        return `내 차는 ${this.carname} 입니다.`
    }
}


class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }

    show(){
        return this.mytalk() + ' 모델은 ' + this.model + '입니다.';
    }
}

let myCar = new Model("기아", "카니발");
document.getElementById("mycar").innerHTML = myCar.show();
// 함수는 호이스팅 되지만 class는 호이스팅되지 않음