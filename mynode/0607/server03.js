const http = require('http');
const server = http.createServer();
const port = 4000;

server.listen(port, () => {
    console.log('웹 서버가 시작되었습니다. 포트번호 : ' + port);
});

// on : 이벤트처리할 때 사용
server.on(('connection'), (socket) => {
    let addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
});

server.on('request', (req, res) => {
    console.log('클라이언트의 요청이 들어왔습니다.');
    // console.dir(req);
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>응답페이지</title>
        </head>
        <body>
            <h1>nodeJS 웹 서버가 요청에 대해 응답합니다.<h1>
        </body>
        </html>
    `);
    res.end();
})