const express = require('express');
const http = require('http');
const app = express();

// Redirect
app.use((req, res) => {
    console.log('첫 번째 미들웨어에서 요청을 처리');
    let userAg = req.header('User-Agent');
    let paraName = req.query.name || '손님'; // 주소창에 "?name=이름"이라고 추가하면 적은 "이름"이 paraName에 들어감
    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    res.write('<h1>Express서버 응답결과</h1>');
    res.write(`<div><p>User-Agent : ${userAg}</p></div>`);
    res.write(`<div><p>접속자는 ${paraName} 입니다.</p></div>`);
    res.end();
})

http.createServer(app).listen(4000, () => {
    console.log('4000 포트에서 express 서버 시작');
});