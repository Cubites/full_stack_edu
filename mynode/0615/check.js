//미들웨어 --> morgan, cookie-parser  express-session   
// dotenv == env  파일 생성 
/*
  1. dotenv 패키지는 .env파일을 읽어서 process.env로 만듬
  2. 즉 process.env.COOKIE_SECRET에 cookiesecret 값이 할담 됨
  3. 별도로 관리하는 이유는 보안성, 편의성 때문
*/
const express = require('express');
const morgan = require('morgan');
/*
  app.use(morgan('dev')) => 인수로 dev 이외에 combined, common, short, tiny 등을 
  넣을 수 있음. 인수를 바꾸면 로그가 달라진다. 
  일반적으로 개발환경에선 dev 를 인수로, 배포환경에서는 conbined를 인수로 사용한다. 
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

/* body-parser 익스프레스 4.16 이상 ==> 
   익스프레스 4.16 미만에서는  
   const bodyParser = require('body-parser');
   app.use(bodyParser.json())
*/
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    name: 'sessionCookie',
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly : true,
        secure: false
    }
}));

app.use((req, res, next) => {
    console.log('모든 요청이 다 실행 됨');
    next();
});

app.get('/', (req, res, next)=>{
    const username = req.query.name || req.body.name;
    console.log('GET/ 요청에서만 실행됨' + username);
    next();
},(req, res)=>{
    throw new Error('에러는에러 처리 미들에어로 보냄');
});

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port')+'번 포트로 대기중입니다.');
});