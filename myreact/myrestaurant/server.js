const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./db/db.json');

app.get('/app', (req, res) => {
    let dbquery = `SELECT * FROM restaurant_ggy order by id desc LIMIT 0, 20`;
    con.query(dbquery, (err, rows, fields) => {
        if(err){ console.log('db접속중에 에러가 발생했습니다.' + err)}
        res.send(rows);
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));