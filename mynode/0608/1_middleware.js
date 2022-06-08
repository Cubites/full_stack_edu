const express = require('express');
const http = require('http');
const app = express();

// 첫 번째 미들웨어
app.use((req, res, next) => {
    console.log('첫 번째 미들웨어에서 요청을 처리');
    req.userName = '홍길동';
    next();
});

// 두 번째 미들웨어
app.use('/', (req, res) => {
    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    // res.write();
    res.end('<h1>Express 서버 응답결과 이름은' + req.userName + '입니다.</h1>');
})

http.createServer(app).listen(4000, () => {
    console.log('4000 포트에서 express 서버 시작');
});