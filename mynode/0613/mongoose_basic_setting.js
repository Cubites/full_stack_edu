const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const expressErrorHandler = require('express-error-handler');

// mongoose 모듈
const mongoose = require('mongoose');

let database;
const connectDB = () => {
    const databaseUrl = 'mongodb://localhost:27017/local';

    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);

    database.on('open', () => {
        console.log('데이터베이스에 연결됨 ' + databaseUrl);
        database = mongoose.connection;
        UserSchema = mongoose.Schema({
            id: String,
            name: String,
            password: String
        });
        console.log('UserSchema를 정의함');
    });

    database.on('disconnected', () => {
        console.log('데이터베이스 연결 끊어짐');
    });
    database.on('error', console.error.bind(console, 'mongoose 연결 에러'));
};