const http = require('http');
const options = {
    host: 'www.musecom.net',
    port: 80,
    path: '/'
};

let req = http.get(options, (res) => {
    let resData = '';
    res.on('data', (chunk) => {
        resData += chunk;
    });
    res.on('end', () => {
        console.log(resData);
    });
    req.on('error', (err) => {
        console.log('에러가 발생했습니다.' + err.message);
    });
});
// 공공데이터를 웹에서 읽어 사용할 때 사용
// 복잡하기 때문에 실제로는 axios 같은 것들을 사용