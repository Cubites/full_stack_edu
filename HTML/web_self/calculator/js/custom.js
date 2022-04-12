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

let numa = null;
let numb = null;
let signa = "";
let signb = "";
lis = document.querySelectorAll('li');
lis.forEach(element => {
    element.addEventListener('touchstart', touch);
    element.addEventListener('touchend', input);
    console.log(element.innerHTML);
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
    }else if(sign2.indexOf(text) > -1){
        inputsign2(text);
    }else if(sign3.indexOf(text) > -1){
        inputsign3(text);
    }else if(sign4.indexOf(text) > -1){
        inputsign4(text);
    }
    this.style.backgroundColor = "#eee";
}

function inputnum(n){
    if(sign != "" && result.innerHTML != '0'){
        result.innerHTML += n;
    }else if(sign != "" && result.innerHTML == '0'){
        result.innerHTML = n;
    }else if(sign == "" && result.innerHTML != '0'){
        result.innerHTML += n;
    }else if(sign == "" && result.innerHTML == '0'){
        result.innerHTML = n;
    }
}

function inputsign(s){
    if(sign != "" && result.innerHTML != '0'){
        sign = s;
        num = cal4(num, sign, Number(result.innerHTML));
    }else if(sign == "" && result.innerHTML != '0'){
        sign = s;
        seq.innerHTML = `${result.innerHTML} ${sign}`;
        num = Number(result.innerHTML);
        result.innerHTML = '0';
    }else if(sign != "" && result.innerHTML == '0'){
        sign = s;
        seq.innerHTML = `0 ${sign}`;
    }else if(sign == "" && result.innerHTML == '0'){
        sign = s;
        seq.innerHTML = `0 ${sign}`;
    }
}

function cal4(numa, msign, numb){
    if(msign != ""){
        switch (msign) {
            case '+':
                num = numa + numb;
            break;
            case '−':
                num = numa - numb;
            break;
            case '×':
                num = numa + numb;
            break;
            case '÷':
                num = numa + numb;
            break;
            default:
                console.log('사칙연산 아님');
        }
    }
    return num
}

// excepts = ['%', '¹/x', 'CE', 'x²', 'C', '√', '←', '.', '±', '='];
function inputsign2(s){
    let numb = "";
    if(s == '√'){
        numb = Math.sqrt(numb);
    }else if(s == 'x²'){
        numb = numb ** 2;
    }else if(s == '%'){
        numb = numb * 0.01;
    }else if(s == '¹/x'){
        numb = 1 / numb;
    }

    // if(s == "CE"){
    //     result.innerHTML = 0;
    //     return 0;
    // }else if(s == 'C'){
    //     result.innerHTML = 0;
    //     num = null;
    //     sign = "";
    //     seq.innerHTML = '';
    // }
}