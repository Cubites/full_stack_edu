// 미들웨어 --> morgan, cookie-parser, express-session
// dotenv : env 파일 생성 (미들웨어 아님)
/*
    1. dotenv 패키지는 .env파일을 읽어서 process.env로 만듬
    2. 즉 process.env.COOKIE_SECRET에 cookiesecret 값이 할당됨
    3. 별도로 관리하는 이유는 보안성, 편의성 때문
*/
const express = require('express');
const morgan = require('morgan');
/*
    app.use(morgan('dev')) => 인수로 dev 이외에 combined, common, short, tiny 등을 넣을 수 있음. 인수를 바꾸면 로그가 달라짐
    일반적으로 개발환경에선 dev를 인수로, 배포환경에서는 combined를 인수로 사용
*/
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 4000);

app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname, 'public')));
/*
    static 미들웨어는 정적인 파일들을 제공하는 라우터 역할을 함
    app.use('요청경로', express.static('실제경로'));
*/

/* 
    express 4.16 이상 부터 내장된 body-parser
    express 4.16 이전 버전에서는 
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
*/
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/*
    쿠키 변조를 방지하기 위해 쿠기값 뒤에 시크릿키를 붙임
    예: req.cookies { name: 'hong' } => name: hong.sign
        >> 서명된 쿠키는 req.sookies 대신 req.signedCookies
*/
app.use(cookieParser(process.env.COOKIE_SECRET));
/*
    express-session 1.5 이전에는 cookie-parser를 이용해서 cookie-parser를 만들고 그 뒤에 만들어야 했음
    1.5 이후부터는 사용하지 않게 되어 위치가 상관 없어짐
    req.session.name='hong' => 세션등록
    req.sessionID => 세션아이디확인
    req.session.destroy() => 세션 모두 제거
*/
app.use(session({
    name: 'sessionCookie',
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));

app.use((req, res, next) => {
    console.log('모든 요청이 다 실행됨');
    next();
});

app.get('/', (req, res, next) => {
    const username = req.query.name || req.body.name;
    console.log('GET/ 요청에서만 실행됨' + username);
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 보냄');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port') + '번 포트로 대기중입니다.');
});
