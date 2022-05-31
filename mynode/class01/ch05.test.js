// process

// console.dir(process);
// console.log('argv 속성의 파라미터 수 : ', process.argv.length);

process.argv.forEach((item, index) => {
    console.log(index + ' : ' + item);
})