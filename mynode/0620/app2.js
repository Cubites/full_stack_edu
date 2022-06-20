const express = require('express');
const path = require('path');
const app = express();
const static = require('serve-static');
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

app.set('port', process.env.PORT || 4000);

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(app.get('port'), () => {
    console.log(app.get('port') + '번 포트로 대기중');
})