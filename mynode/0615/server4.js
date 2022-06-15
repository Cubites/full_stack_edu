const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
// 업로드 처리모듈 multer 설치
const multer = require('multer');
const fs = require('fs');

try{
    fs.readdirSync('uploads');
}catch(error){
    console.error('uploads 폴더가 없어 새로 생성합니다.');
    fs.mkdirSync('uploads')
}

// 파일 업로드 설정
const upload = multer({ // destination에 filename으로 저장되게 지정
    storage: multer.diskStorage({
        destination(req, file, done){
        done(null, 'uploads/');
        },
        filename(req, file, done){
        const ext = path.extname(file.originalname);
        // 이름 >> 이름 / .jpg >> 이름 + 날짜 + .jpg
        done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024}
});

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 4000);
app.use('/', express.static(path.join(__dirname, 'public'))),
// 하나로 묶어서 관리
app.use(
    express.json(),
    express.urlencoded({extended: false}),
    cookieParser(process.env.COOKIE_SECRET)
);

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
    req.data = "오늘 날씨 좋다.";
    next();
}, (req, res, next) => {
    console.log('이전 미들웨어에서 보내준 데이터는 ' + req.data + ' 입니다.');
    next();
});

app.get('/', (req, res, next) => {
    console.log('GET/ 요청에서만 실행됨');
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 보냄');
});

// 업로드 파일은 세 종류 => 1. 하나, 2. 여러 파일, 3. 파일 없음
// single upload => upload.single('image') - req.file 
// multi upload  => upload.array('image') - req.files
// none file upload => upload.none() - ...
app.post('/upload', upload.array('image'), (req, res) => {
    console.log(req.files, req.body);
    res.send('ok');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port') + '번 포트로 대기중입니다.');
});
