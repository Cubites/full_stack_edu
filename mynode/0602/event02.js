process.on('tiktok', (count) => {
    console.log('틱톡이벤트 발생!! %s', count);
});

setTimeout(() => {
    console.log('2초 후에 틱톡이벤트를 이용해 내용을 전달함.');
    process.emit('tiktok', '3');
}, 2000);