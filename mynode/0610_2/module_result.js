// module_ex3.js
const user3 = require('./module_ex3');
function showUser(){
    return user3().name;
}
console.log(showUser());

// module_ex4.js
const printUser = require('./module_ex4').printUser;
printUser();

// module_ex5.js
const user05 = require('./module_ex5');
user05.printUser();