// let s = prompt("아무 단어를 입력해 주세요.");
let str1 = "abcde";
let str2 = "qwer";

function solution(s){
    if(s.length % 2 == 1){
        return s[parseInt(s.length / 2)];
    }else{
        return s.slice(parseInt(s.length / 2) - 1, parseInt(s.length / 2) + 1);
    }
}
console.log(solution(str1));
console.log(solution(str2));