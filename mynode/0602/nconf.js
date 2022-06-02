const nconf = require('nconf');
nconf.env();
let value = nconf.get('OS');
console.log('당신의 컴퓨터 OS환경변수는 %s 입니다', value);