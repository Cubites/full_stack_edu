const fs = require('fs');

fs.open('./writefile_data.txt', 'r', function(err, fd){
    if(err) throw err;
    let buf = new Buffer.alloc(20); // Buffer size를 10으로 지정
    console.log('버퍼타입 : %s', Buffer.isBuffer(buf));
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer){
        if(err) throw err;
        let inStr = buffer.toString('utf8', 0, bytesRead);
        console.log('파일에서 읽은 데이터 : %s', inStr);
        console.log(err, bytesRead, buffer);
        fs.close(fd, function(){
            console.log('writefile_data.txt 파일을 열고 읽은 후 닫기 완료');
        })
    })
})