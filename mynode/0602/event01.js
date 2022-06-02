process.on('exit', () => {
    console.log('exit 이벤트 발생');
});
setTimeout(() => {
    console.log('3초 후에 실행됨');
    process.exit();
}, 3000);

console.log('3초 후에 이벤트가 실행될 예정');