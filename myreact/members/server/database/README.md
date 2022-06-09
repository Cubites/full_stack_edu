1. dbconf.js 파일 생성
2. 안에 다음 데이터 입력
  > const mysql = require('mysql');
  > const database = mysql.createPool({
  >     host: 'localhost',
  >     user: 'root',
  >     password: '비밀번호',
  >     database: 'db이름'
  > });
  > 
  > module.exports = database;