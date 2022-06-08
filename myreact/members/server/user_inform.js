const express = require('express');
const router = express.Router();
const database = require('./database/dbconf'); // database 접근에 필요한 정보를 불러옴

router.get('/login', (req, res) => {
    res.send({data: 'loginok'});
});
module.exports = router;