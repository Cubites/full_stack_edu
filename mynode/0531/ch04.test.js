// nodeJS 에서 제공하는 대표적인 전역변수 2가지
// 1. __filename (현재 실행한 파일 이름), __dirname(현재 실행한 파일 패스)

console.log("현재 실행한 파일 이름은 %s 입니다.", __filename);
console.log("현재 실행한 파일의 경로는 %s 입니다.", __dirname);

let person = {name: '홍길동', age: 800};
console.dir(person);