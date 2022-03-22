// es6 버전 방법
'use strict';
// 메이플 스토리

// 초보자
class Beginner{
    constructor(name, hp, mp, exp){
        this.name = name; // 이름
        this.hp = hp; // 체력
        this.mp = mp; // 마나
        this.exp = exp; // 경험치
    }

    // 일반공격
    attack(monster){
        console.log("몬스터를 공격합니다.");
        this.hp -= 2;
        if(monster.hp < 1){
            this.exp += 10;
        }else{
            monster.hp -= 5;
        }
    }

    info(){
        if(this.hp < 1){
            return '캐릭터가 사망했습니다.';
        }else{
            return `이름 : ${this.name}, 체력 : ${this.hp}, 마나 : ${this.mp}, 경험치 : ${this.exp}`
        }
    }
}

class Soldier extends Beginner {
    constructor(name, hp, mp, exp){
        super(name, hp, mp, exp);
    }

    // 전사공격
    attack(monster){ // 오버라이딩
        // monster.hp -= 10;
        super.attack(monster);
    }
}

class SwordSoldier extends Soldier{
    constructor(name, hp, mp, exp){
        super(name, hp, mp, exp);
    }

    // 일반공격
    attack(monster){ // 오버라이딩
        monster.hp -= 10;
        this.hp -= 5;
    }

    // 마법공격
    powerStrike(monster){
        monster.hp -= 10;
        this.mp -= 2;
    }
}

// 몬스터
class Monster{
    constructor(name, hp, mp, exp){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.exp = exp;
    }

    // 공격
    attack(beginner){
        beginner.hp -= 5; // 캐릭터에게 데미지 5를 준다.
    }

    info(){
        if(this.hp < 1){
            return '몬스터가 사망했습니다.';
        }else{
            return `이름 : ${this.name}, 체력 : ${this.hp}, 마나 : ${this.mp}, 경험치 : ${this.exp}`
        }
    }
}

// 전사 클래스 생성
let soldier = new Soldier("메이플검사", 100, 100, 0);
console.log("전사의 정보");
console.log(`이름 : ${soldier.name}, 체력 : ${soldier.hp}, 마나 : ${soldier.mp}, 경험치 : ${soldier.exp}`);

// 몬스터 클래스 생성
let greenSnail = new Monster("초록달팽이", 10, 0, 10);
console.log("몬스터의 정보");
console.log(`이름 : ${greenSnail.name}, 체력 : ${greenSnail.hp}, 마나 : ${greenSnail.mp}, 경험치 : ${greenSnail.exp}`);

document.getElementById("attack").addEventListener("click", function(){
    // 전사의 몬스터 공격
    soldier.attack(greenSnail);
    document.getElementById('info').innerHTML = greenSnail.info();
})

document.getElementById("gattack").addEventListener("click", function(){
    // 몬스터의 공격
    greenSnail.attack(soldier);

    // 전사 클래스 생성
    console.log("전사의 정보");
    console.log(`이름 : ${soldier.name}, 체력 : ${soldier.hp}, 마나 : ${soldier.mp}, 경험치 : ${soldier.exp}`);
})