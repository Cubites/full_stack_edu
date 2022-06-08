const mysql = require('mysql');
const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'study01'
});

module.exports = database;