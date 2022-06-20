const express = require('express');
const path = require('path');
const static = require('serve-static');

const app = express();
app.set('port', 4000);

// static
app.use('/', static(path.join(__dirname, 'public')));

// view
app.use('views', static(path.join(__dirname + '/views'))); // view 폴더 지정
app.set('view engine', 'pug'); // view 엔진으로 [ejs, pug] 셋팅

// body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/list', (req, res) => {
    const members = [
        {name: 'john', age: 30},
        {name: 'james', age: 29},
        {name: 'jane', age: 32},
        {name: 'minhee', age: 19}
    ];
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // for(let i = 0; i < members.length; i++){
    //     res.write(`<div>${members[i].name}, ${members[i].age}</div`);
    // }
    req.app.render('list', {members}, (err, html) => {
        if(err){
            console.log('뷰 렌더링 중 오류 발생 ' + err.stack);
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
            res.write('<h2>뷰 렌더링 중 오류가 발생했습니다.');
            res.end();
            return;
        }
        res.end(html);
    });
});

app.post('/process/login', (req, res) => {
    console.log('process/login 호출됨');
    const userid = req.body.userid;
    const userpass = req.body.userpass;
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    let context = {userid: userid, userpass: userpass};
    req.app.render('loginok', context, (err, html) => { // view를 가져옴
        if(err){
            console.err('뷰 렌더링 중 오류 발생 ' + err.stack);
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
            res.write('<h2>뷰 렌더링 중 오류가 발생했습니다.');
            res.end();
            return;
        }
        console.log('rendered: ' + html);
        res.end(html);
    });
    // res.write(`
    //     <style>
    //         ul{
    //             width: 300px;
    //             margin: 15px auto;
    //         }
    //     </style>
    //     <h1>로그인 결과</h1>
    //     <ul>
    //         <li><label>아이디</label>${userid}</li>
    //         <li><label>비밀번호</label>${userpass}</li>
    //     </ul>
    // `);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port') + 'listen...');
});