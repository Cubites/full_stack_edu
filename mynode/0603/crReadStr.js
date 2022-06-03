const fs = require('fs');

let inFile = fs.createReadStream('./crReadStr_read.txt', {flags: 'r'});
let outFile = fs.createWriteStream('./crReadStr_rwd.txt', {flags: 'w'});
inFile.on('data', function(data){
    console.log('읽어 들인 데이터', data);
    outFile.write(data);
});

inFile.on('end', function(){
    console.log('파일읽기 종료')
    outFile.end(function(){
        console.log('파일쓰기 종료');
    });
});