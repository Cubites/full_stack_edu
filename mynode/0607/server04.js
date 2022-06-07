const http = require('http');
const fs = require('fs');
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
    const filename = 't01.jpg';
    const infile = fs.createReadStream(filename, {flags: 'r'});
    infile.pipe(res);
});