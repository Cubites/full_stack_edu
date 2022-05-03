const h = 10;
const w = 10;
/*
    1. 빈배열을 생성 Array()
    2. 각 자리를 채우기 fill()
    3. 각 자리에 값을 할당 map()
*/
const grid = Array(h * w).fill().map((arr, i) => {
    return i;
});

console.log(grid);