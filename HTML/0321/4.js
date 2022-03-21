let a = Number(prompt("아무 숫자를 입력하세요"));
let b = Number(prompt("아무 숫자를 입력하세요"));

function sum(x, y){
    let numCount = y - x + 1;
    if(numCount % 2 == 1){
        let ans = parseInt((x + y) / 2) * numCount;
        console.log(ans);
    }else{
        let ans = (x + y) / 2 * numCount;
        console.log(ans);
    }
}



if(a == b){
    console.log(a);
}else{
    if(a > b){
        sum(b, a);
    }else{
        sum(a, b);
    }
}