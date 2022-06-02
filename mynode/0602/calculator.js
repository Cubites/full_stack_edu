const EventEmitter = require('events').EventEmitter;
const util = require('util');

const Calc = function() {
    this.on('stop', () => {
        console.log('Calc에 stop 이벤트가 전달됨');
    });
}

util.inherits(Calc, EventEmitter);
Calc.prototype.add = (a, b) => {
    return a + b;
}

module.exports = Calc;