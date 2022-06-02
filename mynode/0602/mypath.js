const path = require('path');

// directory 합치기
let directory = ["users", "Cube", "Documents"];
let myDocumentDir = directory.join('/');
console.log("내문서 경로 : " + myDocumentDir);

let myDocumentDir2 = directory.join(path.sep);
console.log("내문서 경로 : " + myDocumentDir2);

let filepath = path.join('/User/Cube', 'notepad.exe');
// 1. 노트패드까지의 경로를 출력
// 2. dirname
// 3. filepath
// 4. basename
// 5. 파일 확장자 출력
console.log(typeof(filepath));
console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));