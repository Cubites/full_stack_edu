const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get('/api/myrestaurant', (req, res) => {
    let offset = 0;
    let limits = 5;
    let dbquery = `SELECT * FROM restaurant_ggy order by id desc LIMIT ${offset}, ${limits}`;
    con.query(dbquery, (err, rows, fields) => {
        if(err){ console.log('db접속중에 에러가 발생했습니다.' + err)}
        res.send(rows);
    });
});

app.post('/api/write', (req, res) => {
    console.log('/write를 통해 업로드 호출');
});

// pagination response
app.get('/api/totalNumber', (req, res) => {
    let totalquery = `SELECT count(*) as count FROM restaurant_ggy `;
    con.query(totalquery, (err, rows, fields) => {
        if(err){ console.log('db 접속 중에 에러가 발생했습니다. ' + err) }
        res.send(rows);
    })
})

app.post('/index', (req, res) => {
    let pagenumber = req.body.pagenum;
    console.log(pagenumber);
})

app.listen(port, () => console.log(`Listening on port ${port}`));