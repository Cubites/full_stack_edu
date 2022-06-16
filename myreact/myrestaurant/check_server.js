const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const data = fs.readFileSync('./db/db.json');
const conf = JSON.parse(data);
const con = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
con.connect();

app.get('/api', (req, res) => {
    let offset = 0;
    let limits = 10;
    let dbquery = `SELECT * FROM restaurant_ggy order by id desc LIMIT ${offset}, ${limits}`;
    con.query( dbquery, (err, rows, fields)=>{
       if(err) { console.log('db접속중에 에러가 발생했습니다.' + err)}
       res.send(rows);
    })
});

app.post('/api/write', (req, res)=>{
   console.log('/write를 통해 업로드 호출');
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));