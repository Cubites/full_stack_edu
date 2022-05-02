const locationA = "korea";
const locationB = "korea";

console.log(locationA === locationB);


const locationC = {
    country: "korea"
}
// 내용은 같지만 배열이라 주소값이 다름
const locationD = {
    country: "korea"
}

// 배열은 주소값을 비교하므로 false 출력
console.log("오브젝트 타입 : " + locationC === locationD);