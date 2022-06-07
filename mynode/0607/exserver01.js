const express = require('express');
const http = require('http');
const app = express();

app.set('port', process.env.PORT || 4000); // 기본 설정된 port가 있으면 사용, 없으면 4000번 포트 사용
const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('익스프레스로 웹 서버를 실행함. ' + app.get('port'));
});