const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
// const Connection = require('mysql/lib/Connection');
const app = express();
const port = process.env.PORT || 4000;

// restaurant data(image file) 데이터 변환
const storage = multer.diskStorage({
    distination: (req, file, cb) => {
        cb(null, 'client/public/upload/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
const upload = multer({ storage: storage });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/upload', express.static('./client/public/upload'));

// mysql 접근에 필요한 정보
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

// 첫 페이지에 필요한 정보 불러오기
app.get('/api/myrestaurant', (req, res) => {
    let offset = 0;
    let limits = 5;
    let dbquery = `SELECT * FROM restaurant_ggy order by id desc LIMIT ${offset}, ${limits}`;
    con.query(dbquery, (err, rows, fields) => {
        if(err){ console.log('db접속중에 에러가 발생했습니다.' + err)}
        res.send(rows);
    });
});

app.get('/api/edit/:id', (req, res) => {
    let dbquery = `SELECT * FROM restaurant_ggy where id=${req.params.id}`;
    // console.log(dbquery);
    con.query(dbquery, (err, rows, fields) => {
        if(err){ console.log('db접속 중에 에러가 발생했습니다.' + err)}
        res.send(rows);
    })
});

// 새 restaurant 등록
app.post('/api/write', upload.single('files'), (req, res) => {
    console.log('/api/write를 통해 업로드 호출');
    const sigun = req.body.sigun;
    const title = req.body.title;
    const tel = req.body.tel;
    const title_food = req.body.titleFood;
    const zip = req.body.zip;
    const address = req.body.address;
    const address_old = req.body.address_old;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const radius = req.body.radius;
    const files = 'upload/' + req.file.filename;
    const params = [
        sigun, title, tel, title_food, zip, 
        address, address_old, latitude, longitude, radius, 
        files
    ];
    let sql = 'INSERT INTO restaurant_ggy values (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    con.query(sql, params, (err, rows, fields) => { // params의 값이 변수 sql의 "?" 자리에 순서대로 하나씩 들어감
        if(err){ console.log('db접속중에 에러가 발생했습니다.' + err) }
        res.send(rows);
    });
});

// 기존 restaurant 데이터 수정
app.post("/api/update", (req, res) => {
    console.dir(req.body);
});

// pagination에 필요한 값(restaurant 수)을 mysql에서 load
app.get('/api/totalNumber', (req, res) => {
    let totalquery = `SELECT count(*) as count FROM restaurant_ggy `;
    con.query(totalquery, (err, rows, fields) => {
        if(err){ console.log('db 접속 중에 에러가 발생했습니다. ' + err) }
        res.send(rows);
    })
})

// 현재 페이지 번호 받아오기
app.post('/index', (req, res) => {
    let pagenumber = req.body.pagenum;
    console.log(pagenumber);
})

app.listen(port, () => console.log(`Listening on port ${port}`));