const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();

app.set('port', 4000);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'study01'
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/input', (req, res) => {
    console.log(req.body);
    req.read('public/');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port') + '번 포트에서 실행 중...');
});