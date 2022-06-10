const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// 포트 설정
app.set('port', process.env.PORT || 4000);

// public 폴더 설정
app.use('/public', static(path.join(__dirname, 'public')));

// post -bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cookieParser 미들웨어 등록
app.use(cookieParser());

// Router 설정
const router = express.Router();

router.route('/process/login/:name').post((req, res) => {
    console.log('/process/login 라우팅 함수에서 받음');
    let userid = req.body.userid || req.query.userid;
    let userpass = req.body.userpass || req.query.userpass;
    let username = req.params.name;
    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    res.write(`<h1>${username} 로그인 실행 결과</h1>`);
    res.write(`
        <p><label>아이디</label> ${userid} </p>
        <p><label>비밀번호</label> ${userpass} </p>
    `);
    res.end();
});

router.route('/process/setUserCookie').get((req, res) => {
    console.log('/process/setUserCookie 라우팅 함수에서 호출');
    res.cookie('user', {
        id: 'hong',
        name: '홍길동',
        power: 10000
    });
    res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get((req, res) => {
    console.log('/process/showCookie 라우팅 함수에서 호출');
    res.send(req.cookies);
});

app.use('/', router);

http.createServer(app).listen(app.get('port'), () => {
    console.log('express로 웹서버를 실행함 : ' + app.get('port'));
});