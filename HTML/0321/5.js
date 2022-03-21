let strings = ["sun", "bed", "car"];
let strings2 = ["abce", "abcd", "cdx"];
let n = Number(prompt("숫자를 입력해주세요"));

function customSort(strings){
    for(let i = 0; i < strings.length; i++){
        strings[i] = strings[i][n] + strings[i];
    }
    console.log(strings);
    strings.sort();
    console.log(strings);
    
    for(let j = 0; j < strings.length; j++){
        strings[j] = strings[j].slice(1,strings[j].length);
    }
    console.log(strings);
}

customSort(strings);