const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

// 파일 가져오기
const { login, product, logout } = require('./module/module');
const { setUserCookie, showCookie } = require('./module/cookie_module');

const app = express();

// 포트 설정
app.set('port', process.env.PORT || 5000);

// 기본폴더
app.use('/www', static(path.join(__dirname, 'public')));

// bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cookie
app.use(cookieParser());

// session
app.use(expressSession({
    secret: 'work',
    resave: true,
    saveUninitialized: true
}));

// router
const router = express.Router();

// login
router.route('/process/login/:name').post(login);

// product 호출
router.route('/product').get(product);

// 로그아웃
router.route('/logout').get(logout)

// 쿠키 저장
router.route('/setUserCookie').get(setUserCookie);

// 쿠키확인
router.route('/showCookie').get(showCookie);

// 라우터 미들웨어 등록
app.use('/', router);

// 서버실행
http.createServer(app).listen(app.get('port'), () => {
    console.log('server start on ' + app.get('port') + ' port');
});