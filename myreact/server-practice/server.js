const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

let corsOptions = {
    origin: "http://localhost:4000"
}
app.use(cors(corsOptions));
const port = process.env.PORT || 4000;

// 미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
// /미들웨어
const data = fs.readFileSync('./database/db.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
   host: conf.host,
   user: conf.user,
   password: conf.password,
   port: conf.port,
   database: conf.database
});
console.log(connection);
connection.connect();


app.get('/api/server-practice', (req, res) => {
    let offset = 0;
    let limits = 30;
    let sql = `select * from restaurant_ggy order by id asc LIMIT ${offset}, ${limits}`;
    console.log(sql);
    connection.query(
        sql, (err, rows, fields) => {
            res.send(rows);
        }
    )
})

// app.get('/api/server-practice', (req, res) => {
//     res.send([
//         {
//             "id": 1,
//             "sigun": "가평군",
//             "title": "가평축협 한우명가",
//             "tel": "031-581-1592",
//             "title_food": "푸른연잎한우명품꽃등심",
//             "zip": 12422,
//             "address": "경기도 가평군 가평읍 달전로 19", 
//             "address_old": "경기도 가평군 가평읍 달전리 382-1번지",
//             "latitude": 37.8158443,
//             "longitude": 127.5161283,
//             "radius": 100
//         },
//         {
//             "id": 2,
//             "sigun": "고양시",
//             "title": "청정바지락칼국수",
//             "tel": "031-912-7676",
//             "title_food": "천년초들깨수제비",
//             "zip": 10359,
//             "address": "경기도 고양시 일산동구 일산로463번길 7", 
//             "address_old": "경기도 고양시 일산동구 정발산동 1148번지",
//             "latitude": 37.6737073,
//             "longitude": 126.7753751,
//             "radius": 100
//         },
//         {
//             "id": 3,
//             "sigun": "고양시",
//             "title": "양촌리아구",
//             "tel": "031-911-0430",
//             "title_food": "아구탕",
//             "zip": 10218,
//             "address": "경기도 고양시 일산서구 대화2로 152", 
//             "address_old": "경기도 고양시 일산서구 대화동 762-3번지",
//             "latitude": 37.6719314,
//             "longitude": 126.7362187,
//             "radius": 100
//         },
//         {
//             "id": 4,
//             "sigun": "고양시",
//             "title": "정통중화요리 남궁",
//             "tel": "031-911-3702",
//             "title_food": "해물고추짬뽕, 양장피",
//             "zip": 10367,
//             "address": "경기도 고양시 일산서구 일산로 682", 
//             "address_old": "경기도 고양시 일산서구 대화동 2101번지",
//             "latitude": 37.6820421,
//             "longitude": 126.7535498,
//             "radius": 100
//         },
//         {
//             "id": 5,
//             "sigun": "고양시",
//             "title": "야구장농원",
//             "tel": "031-964-2884",
//             "title_food": "오리진흙구이",
//             "zip": 10313,
//             "address": "경기도 고양시 일산동구 견달산로 351", 
//             "address_old": "경기도 고양시 일산동구 문봉동 102-1번지",
//             "latitude": 37.6971016,
//             "longitude": 126.8198191,
//             "radius": 100
//         }
//     ]);
// });

app.listen(port, () => console.log(`Listening on port ${port}`));