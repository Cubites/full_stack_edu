let arr = [1, 1, 3, 3, 0, 1, 1];
let arr2 = [4, 4, 4, 3, 3];

// indexIf(), filter(), includes(), forEach()
// forEach() - 배열을 순회하면서 배열의 원소들로 주어진 callback함수를 실행

// let result = [];
// arr.forEach((element, index, array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// });

// ex) 0부터 10까지 중에서 3의 배수만 출력하라.
// let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// a.forEach((element) => {
//     if(element % 3 == 0){
//         result.push(element);
//     }
//     console.log(result);
// })

// includes() - 배열에 특정 값이 포함되는지 여부를 검사

let rs = [];
arr.forEach((element) => {
    if(!rs.includes(element)){
        rs.push(element);
    }
    console.log(rs);
})
