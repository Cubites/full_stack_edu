function solution01(a, b){
    // let wk = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    // //getDay는 0이 일요일
    // let gd = new Date(2016, a-1, b).getDay();
    // console.log(wk(gd));
    // return wk[gd];
    return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][new Date(2016, a-1, b).getDay()];
}

console.log(solution01(3, 21));