const express =require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
    // res.send('Hello Express');
    // req에 대한 응답을 html로 응답하고 싶은 경우 res.sendFile 메서드를 이용하면 됨
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 준비되었음');
});