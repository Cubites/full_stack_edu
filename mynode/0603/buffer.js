
let output = '안녕 1';
let buffer1 = new Buffer.alloc(4); // 구버전 : new Buffer(10);
let len = buffer1.write(output, 'utf8');

console.log('버퍼에 쓰인 문자열의 길이 : ' + len);
console.log(`첫 번째 버퍼에 쓰인 문자열 : ${buffer1.toString()}`);
console.log(`버퍼 객체인지 확인 : ${Buffer.isBuffer(buffer1)}`);

let buffer2 = new Buffer.from('안녕 2', 'utf8'); // 구버전 : new Buffer('안녕 2', 'utf8')
console.log('두 번째 버퍼에 쓰인 문자열 : %s', buffer2.toString());
console.log('버퍼 객체의 타입 : %s', Buffer.isBuffer(buffer2));

let byteLen = Buffer.byteLength(output);
console.log(byteLen);
buffer1.copy(buffer2, 0, 0, len);
console.log('두번째 버퍼에 복사한 후의 문자열 : %s', buffer2.toString('utf8'));