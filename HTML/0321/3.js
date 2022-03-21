let arr = [1, 1, 3, 3, 0, 1, 1];
let arr2 = [4, 4, 4, 3, 3];

function solution(arr){
    let ans = [arr[0]];
    for(i of arr){
        if(i != ans[ans.length - 1]){
            ans += i;
        }
    }
    console.log(ans);
}

solution(arr);
solution(arr2);