const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');

const timeStampFormat = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

// let logger = (new winston.Logger)({}) (= winston.createLogger({}))
let logger = winston.createLogger({
    transports: [
        new (winstonDaily)({
            name: 'info-file',
            filename: './log/server',
            dataPattern: '_yyyy-MM-dd.log',
            colorize: true,
            level: 'info',
            maxsize: 10000000,
            maxFiles: 10000,
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});
