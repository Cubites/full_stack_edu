// 배열 객체
// 날짜 객체
// var 참조변수 = new Array();
// var myInfo = new Array(10, "홍길동", "율도국", "황제");
// == var myInfo = [10, "홍길동", "율도국", "황제"];
// == var myInfo = new Array();
// myInfo[0] = 10;
// myInfo[1] = "홍길동";
// myInfo[2] = "율도국";
// myInfo[3] = "황제";

// var arr = [30, 19, "철수", "영희", "순이", true, false, "금자", 0, 10, 12, 19, 20];

// // 배열의 길이 => 배열변수.length;
// document.write("배열의 길이 : " + arr.length, "<br>");

// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i], "<br>");
// }
// document.write("<br><br>")
// // for in

// for(n in arr){
//     document.write(arr[n], "<br>");
// }



// var arr1 = ["김포공항", "고촌", "풍무", "사우", "걸포북변"];
// var arr2 = ["운양", "장기", "마산", "구래", "양촌"];
// var rs = arr1.join(" -> ");
// document.getElementById("gd1").innerHTML = rs;

// rs = arr1.concat(arr2);
// document.getElementById("gd2").innerHTML = rs;

// rs = arr1.slice(1,3);
// document.getElementById("gd3").innerHTML = rs;

// arr1.sort() // 가나다순
// document.getElementById("gd4").innerHTML = arr1;

// arr2.reverse();
// document.getElementById("gd5").innerHTML = arr2;

// // begin : 잘라낼 배열의 시작 index
// // end : 잘라낼 배열의 종료 index (end값은 잘라낼 배열에 포함되지 않는다.)
// // end 생략 시 : begin부터 배열 끝까지 잘라낸다.
// var ar = [1, 2, 3, 4];
// document.write(ar.slice(1, 3), "<br>");
// document.write(ar.slice(1), "<br>");
// document.write(ar. slice(-3, -1));




var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

// 1. 강남을 삭제하고 서초, 역삼을 추가하시오.
greenArr.splice(2, 1, "서초", "역삼");
// 2번 인덱스부터 1개의 데이터를 삭제한 후, 서초, 역삼을 추가
document.write("1번 answer : " + greenArr, "<br>");

// 2. yellowArr 노선 배열을 pop 하고 결과를 조사하시오.
var dt1 = yellowArr.pop()
document.write("2번 answer : " + dt1, "<br>");

// 3. yellowArr 노선 배열을 shift 하시오.
var dt2 = yellowArr.shift();
document.write("3번 answer : " + dt2, "<br>")

console.log(yellowArr)

// 4. 3번의 결과를 yellowArr의 마지막 인덱스에 추가하시오.
yellowArr.push(dt2);
document.write("4번 answer : " + yellowArr, "<br>");

// 5. 2번의 결과를 yellowArr의 가장 앞쪽 인덱스에 추가하시오.
yellowArr.unshift(dt1);
document.write("5번 answer : " + yellowArr, "<br>")