const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const expressErrorHandler = require('express-error-handler');

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended : false}));

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public'))); // 주소창에 "/public_안의_폴더명/파일명"을 적으면 해당 파일이 표시됨

router.route('/member/loginok/:name').post((req, res) => {
    console.log('로그인 처리');
    let groupMemer = req.params.name;
    let userName = req.body.userid || req.query.userid;
    let userPass = req.body.userpass || req.query.userpass;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express서버 응답결과</h1>');
    res.write('<img src="../../images/accessory.jpg" width=200 alt="목걸이">')
    res.write(`<div><p>접속자의 아이디는 ${userName}이며 비밀번호는 ${userPass}입니다.</p></div>`);
    res.write(`접속자는 ${groupMemer}에 속해 있습니다.`);
    res.end();
});

const errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

app.use('/', router);

// app.use((req, res) => {
//     console.log('첫 번째 미들웨어에서 요청을 처리');
//     let userAg = req.header('User-Agent');
//     let userName = req.body.userid;
//     let userPass = req.body.userpass;
//     let paraName = req.query.name || '손님'; // 주소창에 "?name=이름"이라고 추가하면 적은 "이름"이 paraName에 들어감
//     res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
//     res.write('<h1>Express서버 응답결과</h1>');
//     res.write('<img src="images/accessory.jpg" width=200 alt="목걸이">')
//     res.write(`<div><p>User-Agent : ${userAg}</p></div>`);
//     res.write(`<div><p>접속자의 아이디는 ${userName}이며 비밀번호는 ${userPass}입니다.</p></div>`);
//     res.end();
// });

http.createServer(app).listen(4000, () => {
    console.log('4000 포트에서 express 서버 시작');
});