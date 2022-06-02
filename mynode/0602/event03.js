const Calc = require('./calculator');
const calc1 = new Calc();
calc1.emit('stop');

console.log('Calc에 stop 에 이벤트를 전달', calc1.add(100, 200));