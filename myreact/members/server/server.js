// express, mysql, body-parser
const express = require('express');
const app = express();

const userInform = require('./routes/user_inform');
app.use('/user_inform', userInform);
const port = 4000;
app.listen(port, () => console.log(`서버가 NODEJS를 이용해 ${port}로 실행되었습니다.`));