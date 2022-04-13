let lis = document.getElementsByTagName("li");

// 숫자만 style 수정
Array.from(lis).forEach(element => {
    let con = element.innerHTML;
    if(Number(con) >= 0 || Number(con) <= 9){
        element.style.fontWeight = 700;
        element.style.fontSize = '25px';
    }
});

// 입력 받기
let result = document.getElementById('resultTab');
let seq = document.getElementsByTagName('p')[0];
let sign1 = ['+', '−', '×', '÷'];
let sign2 = ['%', '¹/x', 'x²', '√'];
let sign3 = ['CE', 'C', '←', '='];
let sign4 = ['.', '±'];

let num = null;
let sign = "";
lis = document.querySelectorAll('li');
lis.forEach(element => {
    element.addEventListener('touchstart', touch);
    element.addEventListener('touchend', input);
    // console.log(element.innerHTML);
})

function touch(){
    this.style.backgroundColor = "#ddd";
}

function input(){
    text = this.innerHTML;
    if(Number(text) >= 0 || Number(text) <= 9){
        inputnum(Number(text));
    }else if(sign1.indexOf(text) > -1){
        inputsign(text);
    }else if(sign3.indexOf(text) > -1){
        inputsign3(text);
    }
    // else if(sign2.indexOf(text) > -1){
    //     inputsign2(text);
    // }else if(sign4.indexOf(text) > -1){
    //     inputsign4(text);
    // }
    this.style.backgroundColor = "#eee";
    // console.log(num, sign, seq.innerHTML, result.innerHTML);
}

// number
function inputnum(n){
    if(sign == "="){
        seq.innerHTML = "";
        num = null;
        sign = "";
        result.innerHTML = n;
    }else if(result.innerHTML == '0' || result.innerHTML == num){
        result.innerHTML = n;
    }else if(result.innerHTML == "div/0 에러"){
        result.innerHTML = n;
    }else{
        result.innerHTML += n;
    }
}

// sign1 = ['+', '−', '×', '÷']
function inputsign(s){
    let check = Number(result.innerHTML);
    if(num == null && sign == ""){
        num = check;
        sign = s;
        seq.innerHTML = `${num} ${sign}`;
    }else if(num != null && sign != ""){
        num = cal4(num, sign, check);
        if(num == null){
            sign = "";
            seq.innerHTML = "";
            result.innerHTML == "div/0 에러";
        }else{
            sign = s;
            seq.innerHTML = `${num} ${sign}`;
            result.innerHTML = 0;
        }
    }
}

function cal4(numa, msign, numb){
    if(msign == '+'){
        return numa + numb;
    }else if(msign == '−'){
        return numa - numb;
    }else if(msign == '×'){
        return numa * numb;
    }else if(msign == '÷'){
        if(numb == 0){
            return null
        }else{
            return numa / numb;
        }
    }
}

// let sign2 = ['%', '¹/x', 'x²', '√'];
function inputsign2(s){
    let check = Number(result.innerHTML);
    if(s == '%'){
        result.innerHTML = parseFloat((check * 0.01).toFixed(0));
    }else if(s == '¹/x'){
        if(check == 0){
            result.innerHTML = 'div/0 에러';
            num = null
        }else{
            result.innerHTML = parseFloat((1 / check).toFixed(8));
        }
    }else if(s == 'x²'){
        seq.innerHTML = `sqr(${seq.innerHTML})`;
        result.innerHTML = parseFloat((check ** 2).toFixed(8));
    }else if(s == '√'){
        seq.innerHTML = `√(${seq.innerHTML})`;
        result.innerHTML = parseFloat(Math.sqrt(check).toFixed(8));
    }
}

// let sign3 = ['CE', 'C', '←', '='];
function inputsign3(s){
    let check = Number(result.innerHTML);
    if(s == "CE"){
        result.innerHTML = 0;
    }else if(s == 'C'){
        result.innerHTML = 0;
        num = null;
        sign = "";
        seq.innerHTML = '';
    }else if(s == '←'){
        let changeNum = String(check).slice(0, String(check).length - 1);
        result.innerHTML = (changeNum == "") ? 0 : changeNum;
    }else{
        num = cal4(num, sign, check);
        if(num == null){
            if(sign != ""){
                sign = "";
                seq.innerHTML = "";
                result.innerHTML = "div/0 에러";
            }else{
                result.innerHTML = result.innerHTML;
            }
        }else{
            num = parseFloat(num.toFixed(8));
            sign = s;
            seq.innerHTML += ` ${check} =`;
            result.innerHTML = num;
        }
    }
}

// let sign4 = ['.', '±'];