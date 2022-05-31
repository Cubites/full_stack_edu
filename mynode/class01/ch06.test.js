const calc = require('./calc');
console.log(calc.add(10, 2));
console.log(calc.minus(10, 2));
console.log(calc.times(10, 2));
console.log(calc.divide(10, 2));

// 모듈을 이용하여 + - * / 함수를 만든 후 ch06.test 에서 require 하여 각 수식을 계산해 보자.