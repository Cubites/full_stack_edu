const fs = require('fs');

// readFileSync => 동기식 IO
let mypackage = fs.readFileSync('./package.json', 'utf8');
console.log(mypackage);
console.log('package.json 파일을 읽었습니다.');