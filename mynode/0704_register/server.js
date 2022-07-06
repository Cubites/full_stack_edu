const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const static = require('serve-static');
const nunjucks = require('nunjucks');
const multer = require('multer');
const fs = require('fs');

const router = express.Router();
const app = express();
app.set('port', 4000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});

let database, UserSchema, UserModel;
const connectDB = () => {
    const databaseUrl = 'mongodb://127.0.0.1:27017/local'
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;
    database.on('open', ()=>{
        console.log('데이터베이스가 연결되었습니다.' + databaseUrl);
        UserSchema = mongoose.Schema({
            id : { type: String, required: true, nuique: true },
            name: { type: String, required: true, index: 'hashed'},
            password: { type: String, required: true },
            newfileName: String,
            orifileName: String,
            fileExt: String,
            fileSize: Number,
            creatDt: { type:Date, index:{ unique: false}, default: Date.now },
            updateDt: { type: Date, default: Date.now }
        });
        console.log('UserSchema 정의');
        UserModel = mongoose.model('users', UserSchema);
        console.log('UserModel 정의');
    });
    database.on('disconnected', ()=>{
        console.log('데이터베이스 연결이 끊어졌습니다.');
    });
    database.on('error', console.error.bind(console, 'mongoose 연결 에러'));
}

//업로드 셋팅
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

//static
app.use(static(path.join(__dirname, 'public')));
//app.use('/image', static(path.join(__dirname, 'uploads')));
app.use('/image', express.static('uploads'));

//bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', router);

app.post('/loginok', (req, res, next)=>{
    const userid = req.body.userid;
    const userpass= req.body.userpass;
    UserModel.find({"id": userid, "password": userpass}, (err, docs)=>{
        if(err) { console.error(err); }
        else {
            if(docs.length > 0) {
                console.log('로그인 성공');
                res.render('profile', { title: '유저정보', rs: docs[0]});
            }else{
                console.log('로그인 실패');
                res.render('error', { 
                    title: '로그인 실패',
                    rs: '아이디또는 비밀번호가 잘못되었습니다.', 
                    link: 'login.html'});
            }
        }
    });
});

app.post('/joinok', upload.single('file'), (req, res, next)=>{
   const userid = req.body.userid;
   const username = req.body.username;
   const userpass = req.body.userpass;
   const newfilename = req.file.filename;
   const orifilename = req.file.originalname;
   const fileExt = req.file.mimetype;
   const fileSize = req.file.size;
   const user = new UserModel({
      'id' : userid,
      'name' : username,
      'password': userpass,
      'newfileName': newfilename,
      'orifileName': orifilename,
      'fileExt': fileExt,
      'fileSize': fileSize
   });
   user.save((err)=>{
    if(err){
        console.error(err);
    }else{
        console.log('사용자 데이터 추가');
        res.redirect('/userList');
    }
   })
});

app.post('/joinedtfile',  upload.single('file'), (req, res, next)=>{
    const username = req.body.username;
    const userpass = req.body.userpass;
    const newfilename = req.file.filename;
    const orifilename = req.file.originalname;
    const fileExt = req.file.mimetype;
    const fileSize = req.file.size;
    const uid = req.body.uid;
    const oldfilename = req.body.oldfilename;

    if(fs.existsSync(`/uploads/${oldfilename}`)){
        try{
            fs.unlinkSync(`/uploads/${oldfilename}`);
            console.log(oldfilename + "을 삭제함."); 
        }catch(error){
            console.log(error);
        }
    }

    let user;
    if(userpass){
       user = {
          'name' : username,
          'password': userpass,
          'newfileName': newfilename,
          'orifileName': orifilename,
          'fileExt': fileExt,
          'fileSize': fileSize
        };
    }else{
        user = {
            'name' : username,
            'newfileName': newfilename,
            'orifileName': orifilename,
            'fileExt': fileExt,
            'fileSize': fileSize
         };        
    }
    //  UserModel.update({ where구문 }, {$set: {업데이트 구문}});
    UserModel.update( {"_id": uid}, { $set:  user}, (err)=>{
     if(err){
         console.error(err);
     }else{
         console.log('사용자 데이터 추가');
         res.redirect('/profile-list');
     }
    })
 });


 app.post('/joinnonefile',  upload.none(), (req, res, next)=>{
    const username = req.body.username;
    const userpass = req.body.userpass;
    const uid = req.body.uid;

    let user;
    if(userpass){
       user = {
          'name' : username,
          'password': userpass,
        };
    }else{
        user = {
            'name' : username,
         };        
    }
    //  UserModel.update({ where구문 }, {$set: {업데이트 구문}});
    UserModel.update( {"_id": uid}, { $set:  user}, (err)=>{
     if(err){
         console.error(err);
     }else{
         console.log('사용자 데이터 추가');
         res.redirect('/profile-list');
     }
    })
 });


app.get('/', (req, res)=>{
   res.render('main');
});

app.get('/profile-list', (req, res, next)=>{
    UserModel.find({}, (err, docs)=>{
        if(err) console.log(err);
        const rs = { title: '회원명단', docs};
        console.log(rs);
        res.render('userList', rs);
    }); 
});

app.get('/profile-edit/:uid', (req, res, next)=>{
    const uid = req.params.uid;
    console.log(uid);
    UserModel.find({ "_id" : uid }, (err, docs)=>{
        if(err){
            console.error(err);
        }else{
            res.render('profile_edt', { rs: docs[0]});
        }
    })
});


app.listen(app.get('port'), ()=>{
    console.log(app.get('port') + ' port listen...');
    connectDB();
});