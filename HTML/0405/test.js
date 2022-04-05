var arr = ["sun", "bed", "car", "abce", "abcd", "cdx"];

// arr.sort(function(a,b){
//     console.log(a, b);
//     console.log(a-b);
//     return a-b;
// });

// console.log(arr);


// function solution(arr,divisor){
    //     let answer = [];
    //     let result = arr.filter(function(v){
    //         if(v % divisor == 0){
    //             return v;
    //         }
    //     })
    //     if(result.length == 0){
    //         answer.push(-1);
    //     }else{
    //         answer = result.sort(function(a,b){
    //             return a-b;
    //         })
    //     }
    //     return answer;
    // }

//위에꺼를 짧게 만들기
//리팩토링
function solution(arr,divisor){
    let answer = arr.filter(v => v % divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
console.log(arr);