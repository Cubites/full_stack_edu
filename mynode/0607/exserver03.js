const express = require('express');
const http = require('http');
const app = express();

app.set('port', process.env.PORT || 4000);

// 첫 번째 미들웨어
app.use((req, res, next) => {
    console.log('첫 번째 미들웨어 호출');
    req.user = {
        name: 'john',
        age: 30,
        address: '김포시', 
        gender: '남'
    };
    next();
});

const server = http.createServer(app).listen(app.get('port'), () => {
    console.log(`익스프레스 웹 서버가 ${app.get('port')}번 포트로 실행되었습니다.`);
});

// 두 번째 미들웨어
app.use((req, res, next) => {
    console.log('두 번재 미들웨어 호출');
    res.writeHead(200, {"Content-Type" : "text/html;charset=utf8"});
    res.write('<h1>서버에서 응답한 결과입니다.</h1>');
    res.write('<p>이름 : ' + req.user.name + '</p>');
    res.write('<p>나이 : ' + req.user.age + '</p>');
    res.write('<p>사는 곳 : ' + req.user.address + '</p>');
    res.write('<p>성별 : ' + req.user.gender + '</p>');
    res.end();
});