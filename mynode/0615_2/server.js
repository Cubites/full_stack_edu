const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

let database, UserSchema, UserModel;
const connectDB = () => {
    const databaseUrl = 'mongodb://localhost:27017/local';
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;

    database.on('open', () => {
        console.log('데이터베이스에 연결되었습니다. ' + databaseUrl);
        UserSchema = mongoose.Schema({
            id: {type: String, required: true, unique: true},
            name: {type: String, required: true, index: 'hashed'},
            password: {type: String, required: true},
            newfileName: String,
            orifileName: String,
            fileExt: String,
            creatDt: {type: Date, default: Date.now},
            updateDt: {type: Date, default: Date.now}
        });
        UserModel = mongoose.model('users', UserSchema);
        console.log('UserModel 정의함');
    });
    database.on('disconnected', () => {
        console.log('데이터베이스와의 연결 종료');
    });
    database.on('error', console.error.bind(console, 'mongoose 연결 에러 발생'));
};

// 업로드 처리모듈 multer 설치
const multer = require('multer');
const fs = require('fs');

try{
    fs.readdirSync('public/uploads');
}catch(error){
    console.error('uploads 폴더가 없어 새로 생성합니다.');
    fs.mkdirSync('public/uploads')
}

// 파일 업로드 설정
const upload = multer({ // destination에 filename으로 저장되게 지정
    storage: multer.diskStorage({
        destination(req, file, done){
        done(null, 'public/uploads/');
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

// 회원가입
app.post('/register', upload.single('image'), (req, res) => {
    console.log('회원가입 호출');
    const userid = req.body.userid;
    const username = req.body.username;
    const userpass = req.body.userpass;
    const newfileName = req.file.filename;
    const orifileName = req.file.originalname;
    const fileExt = req.file.mimetype;
    const fileSize = req.file.size;
    const userInfo = {
        userid: userid,
        username: username,
        userpass: userpass,
        newfileName: newfileName,
        orifileName: orifileName,
        fileExt: fileExt,
        fileSize: fileSize
    };
    console.dir(userInfo);
    if(database){
        registerUser(userInfo, (err, docs) => {
            if(err){
                console.log('에러가 발생했습니다.');
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`
                    <h1>에러가 발생했습니다.</h1>
                    <p>파일 등록 도중 알 수 없는 에러 발생</p>
                    <p><a href="/register">다시시도</a>하세요.</p>
                `);
                res.end();
            }
            if(docs){
                console.log(docs);
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`
                    <h1>사용자 추가 성공</h1>
                    <p style="text-align:center; height: 200px;">
                        <img src="uploads/${newfileName}" alt="새사용자" />
                    </p>
                    <p>${username}님이 새로운 회원으로 등록되었습니다.</p>
                    <p><a href="/register">추가등록</a></p>
                `);
                res.end();
            }
        });
    }else{
        console.log('에러입니다.');
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        res.write(`
            <h1>데이터베이스 에러 발생</h1>
            <p><a href="/register">다시시도</a></p>
        `);
        res.end();
    }
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.message);
});

const registerUser = (userInfo, callback) => {
    console.log('registerUser 호출');
    const user = UserModel({
        "id": userInfo.userid,
        "name": userInfo.username,
        "password": userInfo.userpass,
        "newfileName": userInfo.newfileName,
        "orifileName": userInfo.orifileName,
        "fileExt": userInfo.fileExt,
        "fileSize": userInfo.fileSize
    });
    user.save((err) => {
        if(err){
            callback(err, null);
            return;
        }
        console.log('사용자 데이터 추가함');
        callback(null, user);
    });
}

app.listen(app.get('port'), () => {
    console.log(app.get('port') + '번 포트로 대기중입니다.');
    connectDB();
});
