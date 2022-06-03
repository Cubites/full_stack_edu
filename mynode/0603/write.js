const fs = require('fs');
// sample 디렉토리가 있는지 체크
const isDir = fs.existsSync('./sample');
if(isDir === false){
    fs.mkdirSync('./sample');
}
const filename = './sample/sample.txt';
const isFile = fs.existsSync(filename);
if(isFile === false) {
    fs.open(filename, 'w', function(err){
        if(err) throw err;
        ws();
    });
}else{
    ws();
}
function ws(){
    fs.writeFile(filename, 'sample입니다.', (err) => {
        if(err) throw err;
        console.log('파일에 내용을 작성했습니다.');
    });
}
/* fileExists를 비동기형으로 직접 제작 */
// async function fileExists(filename){
//     try{
//         await fs.promises.access(filename);
//         return true;
//     }catch(err) {
//         if(err.code === "ENOENT") {
//             return false;
//         }else{
//             throw err;
//         }
//     }
// }
// console.log(fileExists);

// fs.access('./sample', (err, fd) => {
//     if(err){
//         fs.mkdir('./sample', (err) => {
//             if(err) throw err;
//             let buf = new Buffer.from('sample');
//             let fd = './sample/sample.txt';
//             fs.write(fd, buf, 0, buf.length, null, (err) => {
//                 if(err) throw err;
//                 fs.close(fd, (err) => {
//                     if(err) throw err;
//                 })
//             })
//         })
//     }else{
//         console.log('already exist');
//     }
// })