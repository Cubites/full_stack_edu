const fs = require('fs');

// readFile => 비동기식 IO
fs.readFile('./package.json', 'utf8', function(err, data){
    if(err){
        console.log('파일을 읽을 수 없습니다.');
    }
    console.log(data);
});