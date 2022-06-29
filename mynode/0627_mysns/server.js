const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const path = require('path');
const passport = require('passport');

dotenv.config();
const pageRouter = require('./routes/page'); // 모듈화
const authRouter = require('./routes/auth');
const memberRouter = require('./routes/member');
const snsRouter = require('./routes/sns');
const { sequelize } = require('./models');
const passportConfig = require('./passport'); // 로그인관리

const app = express();
passportConfig(); // passport 설정
app.set('port', process.env.PORT || 4000); // port 셋팅

/** 템플릿 엔진 **/
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});

/** DB연결 **/
sequelize.sync({ force: false })
    .then(() => {
        console.log('db연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

/** log 셋팅 **/
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public'))); // static 폴더
app.use('/img', express.static(path.join(__dirname, 'uploads')));

/** form post **/
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/** 쿠키와 세션 **/
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitalized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));
app.use(passport.initialize()); // 요청객체(req)에 passport를 셋팅
app.use(passport.session()); // req.session에 passport 정보를 저장

app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/sns', snsRouter);
app.use('/member', memberRouter);
app.use((req, res, next) => {
    const error = new Error(`${req.method}[${req.url}] - 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중...');
})