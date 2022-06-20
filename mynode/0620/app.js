const express = require('express');
const path = require('path');
const app = express();
const static = require('serve-static');
const mysql = require('mysql');
const database = require('./config/database');
const connection = mysql.createConnection(database);
// const pug = require('pug');
const nunjucks = require('nunjucks');

connection.connect();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', static(path.join(__dirname, 'public')));
app.use('views', static(path.join(__dirname + 'views'))); // view 지정
// app.set('view engine', 'ejs');
app.set('view engine', 'html');
// configure 첫 번째 인자로 views 폴더의 경로를 넣음, 두 번째 인자로 옵션을 넣음
// watch가 true 이면 html 파일이 변경될 때 템플릿 엔진을 다시 렌더링
// 확장자는 html 또는 njk로 함
nunjucks.configure('views', {
    express: app,
    watch: true
});
app.set('port', process.env.PORT || '4000');


app.get('/', (req, res) => {
    res.send('Root');
});
app.post('/loginok', (req, res) => {
    console.log('loginok 폴더로 대기중');
    const userid = req.body.userid;
    const userpass = req.body.userpass;
    const qry = "select * from members where userid = ? and userpass = ?";
    connection.query(qry, [userid, userpass], (err, results) => {
        if(err){
            res.send(err);
        }else{
            if(results.length < 1){
                console.log(qry);
                console.log('로그인 실패');
            }else{
                let ulevel;
                switch(results[0].userlevel){
                    case 1:
                        ulevel = '일반회원';
                    break;
                    case 2:
                        ulevel = '정회원';
                    break;
                    case 99:
                        ulevel = '운영자';
                    break;
                }
                const context = ({
                    'num': results[0].num,
                    'userid': results[0].userid,
                    'username': results[0].username,
                    'indate': results[0].indate,
                    'logindate': results[0].logindate,
                    'userlevel': results[0].userlevel
                });
                req.app.render('loginok', context, (err, html) => {
                    if(err){
                        console.log('에러발생');
                        res.writeHead(200, {"Content-type": "text/html;charset=utf8"});
                        res.write('<h1>사용자 데이터 조회중 에러 발생</h1>');
                        res.end();
                        return
                    }
                });
            }
        }
    });
});


app.listen(app.get('port'), () => {
    console.log(app.get('port') + '번 포트로 대기중');
})