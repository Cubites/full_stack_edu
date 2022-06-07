let output = '안녕 1!';
let buffer1 = new Buffer.alloc(10);
let len = buffer1.write(output, 'utf8');
console.log('첫 번째 버퍼의 문자열 : %s', buffer1.toString());
console.log('첫 번째 버퍼에 쓰인 문자열의 길이 : ' + len);
console.log('첫 번째 버퍼의 객체 여부 : ' + Buffer.isBuffer(buffer1));

let buffer2 = new Buffer.from('안녕 2!', 'utf8');
console.log('두 번째 버퍼의 문자열 : ' + buffer2.toString());
console.log('두 번째 버퍼의 객체 여부 : ' + Buffer.isBuffer(buffer2));
// 두 번째 버퍼의 문자열 길이
console.log('두 번째 버퍼에 쓰인 문자열의 길이 : ' + Buffer.byteLength(buffer2));