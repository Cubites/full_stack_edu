const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const expressErrorHandler = require('express-error-handler');
const mongoose = require('mongoose');
const static = require('serve-static');
const nunjucks = require('nunjucks');
const router = express.Router(); // router : express 내장
const multer = require('multer'); // 파일 업로드를 위한 모듈

let database;
let UserSchema;
let UserModel;

const connectDB = () => {
    const databaseUrl = 'mongodb://localhost:27017/local';
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;
    // 3가지 상태를 받을 수 있음 : open, disconnected, error
    database.on('open', () => {
        console.log('데이터베이스 연결됨' + databaseUrl);
        UserSchema = mongoose.Schema({
            id: {type: String, required: true, unique: true},
            name: {type: String, required: true, index: 'hashed'},
            password: {type: String, required: true},
            newfileName: String,
            orifileName: String,
            fileSize: Number,
            creatDt: {type: Date, index: {unique: false}, default: Date.now},
            updateDt: {type: Date, default: Date.now}
        });
        console.log('UserSchema 정의함.');
        UserModel = mongoose.model('users', UserSchema);
        console.log('UserModel 정의함');
    });
    database.on('disconnected', () => {
        console.log('데이터베이스 연결 끊어짐');
    });
    database.on('error', console.error.bind(console, 'mongoose 연결 에러'));
}

// 업로드 셋팅
const storage = multer.diskStorage({
    destination: (req, file, cb) => { // cb : callback
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        // const ext = path.extname(file.originalname) // 확장자 값 구하는 방법
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage: storage});

// errorHandler module
// const expressErrorHandler = require('express-error-handler');
const app = express();
app.set('port', 4000);
app.set('view engine', 'html'); // html 대신, njs 도 가능
nunjucks.configure('views', {
    express: app,
    watch: true
});

// cookie, session
app.use(cookieParser());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: 'Musecom',
    cookie: {
        httpOnly: true,
        secure: false
    }
}));

// static
app.use(static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));

// bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', router);

// const errorHandler = expressErrorHandler({
//     static: {
//         '404': './public/404.html'
//     }
// });
// app.use(expressErrorHandler.httpError(404));
// app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Root');
});
app.post('/loginok', (req, res, next) => {
    console.log('loginok 폴더로 대기중');
    const userid = req.body.userid;
    const userpass = req.body.userpass;
    UserModel.find({"id": userid, "password": userpass}, (err, results) => {
        if(err){
            console.error(err);
            return;
        }else{
            if(results.length > 0){
                console.log('로그인 성공');
                res.render('profile', {rs: results[0]});
            }else{
                console.log('로그인 실패');
                res.render('error', {rs: '로그인 실패'});
            }
        }
    });
});

app.post('/joinok', upload.single('file'), (req, res, next) => {
    const userid = req.body.userid;
    const userpass = req.body.userpass;
    const username = req.body.username;
    const newfileName = req.file.filename;
    const orifileName = req.file.originalname;
    const fileExt = req.file.mimetype;
    const fileSize = req.file.size;
    const user = new UserModel({
        'id': userid,
        'name': username,
        'password': userpass,
        'newfileName': newfileName,
        'orifileName': orifileName,
        'fileExt': fileExt,
        'fileSize': fileSize
    });
    user.save((err) => {
        if(err){
            console.error(err);
        }else{
            console.log('사용자 데이터 추가됨');
            res.redirect('/login.html');
        }
    })
});

app.listen(app.get('port'), () => {
    console.log(app.get('port') + ' port listen...');
    connectDB();
});
