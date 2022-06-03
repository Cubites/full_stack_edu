const fs = require('fs');

fs.writeFile('./writefile_data.txt', '안녕? 반가워요.', encoding='utf8', (err) => {
    if(err){
        console.log('Error : ' + err);
    }else{
        console.log('writefile_data 파일에 내용을 썻습니다.');
    }
})