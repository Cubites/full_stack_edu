const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('./passport'); // passport 폴더 접근

dotenv.config();
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');
const { sequelize } = require('./models'); // sequelize를 이용한 table 생성을 위해 호출 함
const passportConfig = require('./passport');

const app = express();

passportConfig(); // passport 설정
app.set('port', process.env.PORT || 4000); // port 설정
app.set('view engine', 'html'); // 템플릿 엔진(html파일 사용 지정)
nunjucks.configure('views', { // 템플릿 엔진 기본값
    express: app,
    watch: true
});
// 데이터베이스
sequelize.sync({force: false})
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.use(express.static(path.join(__dirname, 'public'))); // static 폴더 지정
app.use(express.json()); // post로 들어오는 값을 body로 보냄
app.use(express.urlencoded({extended: false})); // post로 들어오는 값을 body로 보냄
app.use(cookieParser(process.env.COOKIE_SECRET)); // COOKIE_SECRET은 .env 파일의 값을 이용

// session 설정
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));
app.use('/', pageRouter);

// 에러설정 400, 500
app.use((req, res, next) => {
   const error = new Error(`${req.method} ${req.url} 페이지를 찾을 수 없습니다.`);
   error.status = 404;
   next(error);
});
app.use((req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중...');
})