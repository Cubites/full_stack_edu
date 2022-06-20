const express = require('express');
const path = require('path');

const mongoose = require('mongoose');

let database;
let UserSchema;
let UserModel;

const connectDB = () => {
    const databaseUrl = 'mongodb://127.0.0.1:27017/local';

    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;

    database.on('open', () => {
        console.log('데이터베이스에 연결됨 ' + databaseUrl);
        UserSchema = mongoose.Schema({
            id: String,
            name: String,
            password: String
        });
        console.log('UserSchema 정의');
        UserModel = mongoose.model('users', UserSchema);
    });
    database.on('disconnected', () => {});
    database.on('error', console.error.bind(console, 'mongoose 연결 에러'));
};

const app = express();
app.set('port', 4000);
app.use('/', static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// 서버실행
Http.createServer(app).listen(app.get('port'), () => {
    console.log('서버가 ' + app.get('port') + '에서 대기중');
    connectDB();
});