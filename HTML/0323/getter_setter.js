class Car{
    constructor(brand){
        this._carname = brand;
    }

    get carname(){
        return this._carname;
    }
    set carname(v){
        this._carname = v;
    }
    
    // mytalk(){
    //     return `내 차는 ${this.carname} 입니다.`
    // }
}

let myCar = new Car("현대");
document.getElementById("mycar").innerHTML = myCar.carname;
// class Model extends Car{
//     constructor(brand, mod){
//         super(brand);
//         this.model = mod;
//     }

//     show(){
//         return this.mytalk() + ' 모델은 ' + this.model + '입니다.';
//     }
// }

// let myCar = new Model("기아", "카니발");
// document.getElementById("mycar").innerHTML = myCar.show();