const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
// const errorHandler = require('errorHandler');
// 오류 핸들러 모듈
const expressErrorHandler = require('express-error-handler');

// mongodb 모듈 사용
const MongoClient = require('mongodb').MongoClient;
let database;
const connectDB = () => {
    const databaseUrl = 'mongodb://localhost:27017/local';
    MongoClient.connect(databaseUrl, (err, db) => {
        if(err){
            console.log('데이터베이스 연결에 실패했습니다.');
            return;
        }
        console.log('데이터베이스 연결 성공 ' + databaseUrl);
        database = db;
    });
};

const app = express();
// router 등록
const router = express.Router();

// 포트설정
app.set('port', process.env.PORT || 4000);

// 기본폴더
app.use('/', static(path.join(__dirname, 'public')));

// bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cookie
app.use(cookieParser());

// session
app.use(expressSession({
    secret: 'ezen',
    resave: true,
    saveUninitialized: true
}));

router.route('/process/login').post((req, res) => {
    console.log('라우팅 함수가 /process/login으로 호출되었음');
    let userId = req.body.userid || req.query.userid;
    let userPass = req.body.userpass || req.query.userpass;
    console.log('요청파라미터' + userId + ', ' + userPass);
    if(database){
        authUser(database, userId, userPass, (err, docs) => {
            if(err){
                console.log('에러 발생');
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write("<h1>에러가 발생했습니다.</h1");
                res.write("<p>다시 시도하세요. 계속해서 에러가 발생하면 관리자에게 문의 바랍니다.</p>");
                res.end();
                return;
            }
            if(docs){
                console.dir(docs);
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`
                    <h1>사용자 로그인 성공</h1>
                    <div>
                        <p>사용자 : ${doc[0].name} 님 환영합니다.</p>
                    </div>
                    <br>
                    <a href="/login.html">다시 로그인</a>
                `);
                res.end();
                return;
            }else{
                console.log('로그인 실패');
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`
                    <h1>사용자 로그인 성공</h1>
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
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        res.write(`
            <h1>데이터 조회 실패</h1>
            <div>
                <p>사용자 데이터 조회가 되지 않습니다.</p>
            </div>
            <br>
            <a href="/login.html">다시 로그인</a>
        `);
        res.end();
        return;
    }
});

// 라우터 미들웨어 등록
app.use('/', router);

let authUser = (db, id, password, callback) => {
    console.log('authUser 호출됨');
    let users = db.collection('users');
    users.find({"id": id, "password": password}).toArray((err, docs) => {
        if(err){
            callback(err, null); // err, null(정상)
            return;
        }
        if(docs.length > 0){
            console.log('로그인이 가능합니다.');
            callback(null, docs);
        }else{
            console.log('잘못 입력하였거나 해당 사용자가 존재하지 않습니다.');
            callback(null, null);
        }
    });
}

// 에러메시지
const errorHandlers = expressErrorHandler({
    static: {
        '404' : './public/404.html'
    }
});
app.use( expressErrorHandler.httpError(404));
app.use( errorHandlers );

// 서버실행
http.createServer(app).listen(app.get('port'), () => {
    console.log('server start on port ' + app.get('port'));
    connectDB;
});