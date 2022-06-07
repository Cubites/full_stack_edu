const fs = require('fs');

fs.open('./output.txt', 'r', (err, fd) => {
    if(err) throw err;
    let buf = new Buffer.alloc(40);
    console.log('버퍼타입 : %s', Buffer.isBuffer(buf));

    fs.read(fd, buf, 0, buf.length, null, (err, bytesRead, buffer) => {
        if(err) throw err;
        let inStr = buffer.toString('utf8', 0, bytesRead);
        console.log('파일에서 읽은 데이터 : %s', inStr);
        console.log(err, bytesRead, buffer);
        fs.close(fd, () => {
            console.log('output.txt 파일을 열고 읽기를 완료한 후 닫음');
        })
    })
});