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

        UserSchema.statics.findById = function (id, callback){
            return this.find({id: id}, callback);
        };

        UserSchema.statics.findAll = function(callback){
            return this.find({}, callback);
        }

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

app.post('/process/login', (req, res) => {
    console.log('라우팅 함수가 /process/login으로 호출되었음');
    let userId = req.body.userid || req.query.userid;
    let userPass = req.body.userpass || req.query.userpass;
    console.log('요청파라미터: ' + userId + ', ' +userPass);
    if(database){
        authUser(userId, userPass, (err, docs) => {
            if(err){
                console.log('에러 발생');
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`
                    <h1>에러가 발생했습니다.</h1>
                    <p>다시 시도하세요. 계속해서 에러가 발생하면 관리자에게 문의바랍니다.</p>
                `);
                res.end();
                return;
            }
            if(docs){
                console.dir(docs);
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`
                    <h1>사용자 로그인 성공</h1>
                    <div>
                        <p>사용자: ${docs[0].name} 님 환영합니다.</p>
                    </div>
                    <br>
                    <a href="/login.html">다시 로그인 해보기</a> ||
                    <a href="/register.html">새로운 회원 등록 하기</a>||
                    <a href="/list">회원목록보기</a>
                `);
                res.end();
                return;
            }else{
                console.log('로그인 실패');
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`
                    <h1>사용자 로그인 실패</h1>
                    <div>
                        <p>아이디 또는 패스워드가 다릅니다.</p>
                    </div>
                    <br>
                    <a href="/login.html">다시 로그인</a>
                `);
                res.end();
                return;
            }
        });
    }else{
        console.log('에러발생');
        res.writeHead(200, {"Content-Type": "text/html;charser=utf-8"});
        res.write(`
            <h1>데이터 조회 실패</h1>
            <div>
                <p>사용자 데이터 조회가 되지 않습니다.</p>
            <div>
            <br>
            <a href="/login.html">다시 로그인</a>
        `);
        res.end();
    }
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
                    <a href="/login.html">다시 로그인 해보기</a> ||
                    <a href="/register.html">새로운 회원 등록 하기</a>||
                    <a href="/list">회원목록보기</a>
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

app.use('/list', (req, res, next) => {
    if(database){
        UserModel.findAll((err, results) => {
            if(err){
                console.log('에러');
                res.writeHead(200, {"Content-Type": "test/html;charset=utf-8"});
                res.write('<h1>에러발생</h1>');
                res.end();
                return;
            }
            if(results){
                // console.dir(results);
                res.writeHead(200, {"Content-Type": "test/html;charset=utf-8"});
                res.write(`
                    <style>
                        ul{
                            width: 600px;
                            list-style-type: none;
                            margin: 0 auto;
                            padding: 0;
                        }
                        li{
                            border-bottom: 1px dashed #999;
                            padding: 15px 20px;
                            display: flex;
                            justify-content: space-between;
                        }
                    </style>
                    <h3 style="text-center>사용자 리스트</h3>
                    <ul>`);
                for(let i = 0; i < results.length; i++){
                    let img = results[i]._doc.newfileName;
                    let oimg = results[i]._doc.orifileName;
                    let username = results[i]._doc.name;
                    let userid = results[i]._doc.id;
                    res.write(`
                        <img src="uploads/${img} alt="${oimg}" />
                        <div><label>이름</label>${username}</div>
                        <div><label>아이디</label>${userid}</div>
                    `);
                }
                res.write(`</ul>`);
                res.end();
            }
        });
    }
    next();
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

const authUser = (id, password, callback) => {
    console.log('authUser 호출됨 ' + id + ', ' + password);

    UserModel.findById(id, (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        console.log('id %s 검색');
        if(results.length > 0){
            console.log('아이디 일치');
            if(results[0]._doc.password === password){
                console.log('로그인 성공\n 세션을 만든다.');
                callback(null, results);
            }else{
                console.log('비밀번호가 일치하지 않습니다.');
                callback(null, null);
            }
        }else{
            console.log(id + '라는 아이디가 존재하지 않습니다. 다시 확인하세요.');
            callback(null, null);
        }
    });

    UserModel.AllList


    // UserModel.find({"id": id, "password": password}, (err, docs) => {
    //     if(err){
    //         callback(err, null);
    //         return;
    //     }
    //     if(docs.length > 0){
    //         console.log('일치하는 사용자를 찾음');
    //         callback(null, docs);
    //     }else{
    //         console.log('일치하는 사용자를 찾지 못함');
    //         callback(null, null);
    //     }
    // });
};