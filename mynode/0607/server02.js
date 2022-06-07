const http = require('http');
const server = http.createServer();
const port = 4000;
const host = '192.168.0.18';

server.listen(port, host, 5000, () => {
    console.log(`웹 서버 ${host}가 ${port}포트로 실행되었습니다.`);
})