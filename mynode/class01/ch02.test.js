// 타임 객체
let result = 0;

console.time('duration_sum');
for(let i = 0; i < 10000; i++){
    result += i;
}
console.timeEnd('duration_sum');

console.log('1부터 10000까지의 합 : %d', result);