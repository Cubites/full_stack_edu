const os = require('os');
console.log('hostname : %s\n', os.hostname());
console.log('memory : %d\n', os.totalmem());
console.log('usable_memory : %d\n', os.freemem());
console.log('cpu infomation : ');
console.dir(os.cpus());
console.log('network interface infomation : ')
console.dir(os.networkInterfaces());