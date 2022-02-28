var arr1 = ["김포공항", "고촌", "풍무", "사우", "걸포북변"];
var arr2 = ["운양", "장기", "마산", "구래", "양촌"];
var rs = arr1.join(" => ");
document.getElementById("gd1").innerHTML = rs;

rs = arr1.concat(arr2);
document.getElementById("gd2").innerHTML = rs;

//begin : 잘라낼 배열의 시작 index
//end : 잘라낼 배열의 종료 index (end 값은 잘라낼 배열에 포함되지 않는다.)
//end 생략되면, begin부터 배열의 끝까지 잘라낸다.
rs = arr1.slice(0, 3);
document.getElementById("gd3").innerHTML = rs;

arr2.sort();  //가나다순
document.getElementById("gd4").innerHTML = arr2;

arr2.reverse();
document.getElementById("gd5").innerHTML = arr2;

var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

//2번 인덱스부터 1개의 데이터를 삭제한 다음 서초,역삼을 추가
greenArr.splice(2, 1, "서초", "역삼");
console.log(greenArr);

var dt1 = yellowArr.pop();  //마지막거 잘라내기
var dt2 = yellowArr.shift(); //첫번째거 잘라내기

yellowArr.push(dt2);

console.log(yellowArr);

yellowArr.unshift(dt1);
console.log(yellowArr);
