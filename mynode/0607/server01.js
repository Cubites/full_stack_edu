const http = require('http');
const server = http.createServer();
const port = 4000;
server.listen(port, () => {
    console.log(`웹 서버가 ${port}포트로 실행되었습니다.`);
});