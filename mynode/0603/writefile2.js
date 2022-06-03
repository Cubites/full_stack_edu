const fs = require('fs');

fs.open('./writefile_data.txt', 'w', (err, fd) => {
    if(err) throw err;
    let buf = new Buffer.from('두 번째 안녕.\n');
    console.log(buf);
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        if(err) throw err;
        console.log(err, written, buffer);

        fs.close(fd, function(){
            console.log('파일 열고 데이터 쓴 후 닫기 완료');
        })
    });
})