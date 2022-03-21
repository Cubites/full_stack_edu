function solutionRefactoring(str){
    return str.substr(Math.ceil(str.length / 2) - 1, (str.length % 2 == 0)? 2 : 1);
}

function solution(str){
    let s = Math.ceil(str.length / 2) - 1;
    let cut = (str.length % 2 == 0)? 2 : 1;
    return str.substr(s, cut);
}

console.log(solution("abcde"));
console.log(solutionRefactoring("abcde"));

console.log(solution("qwer"));
console.log(solutionRefactoring("qwer"));