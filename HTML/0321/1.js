let weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let day30_31 = [false, true, false, true, false, true, false, false, true, false, true, false];

let a = Number(prompt("월 : "));
let b = Number(prompt("일 : ")) + 4;

function weekCalculate(a, b){
    for(a; a > 1; --a){
        if(a == 3){
            b += 29;
        }else if(day30_31[a] === false){
            b += 31;
        }else{
            b += 30;
        }
    }
    return b;
}

if(0 < a && a < 13){
    if(a == 2){
        if(b < 34){
            b = weekCalculate(a, b);
            alert(weeks[b % 7]);
        }else{
            alert("잘못된 날짜(2016년 2월은 29일까지)");
        }
    }else if(b + day30_31[a] > 36){
        alert("잘못된 날짜");
    }else{
        b = weekCalculate(a, b);
        alert(weeks[b % 7]);
    }
}