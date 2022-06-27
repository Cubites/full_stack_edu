/*
    isLoggedIn 미들웨어는 req.isAuthenticated()가 true 이어야 next 호출됨
*/
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user'); // db table

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const { email, nick, password } = req.body;
    try{
        const exUser = await User.findOne({where: {email}});
        if(exUser){
            return res.redirect('/join?error=exit');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            nick,
            password: hash
        });
        return res.redirect('/');
    }catch(error){
        console.error(error);
        return next(error);
    }
});

// 로그인
router.post('/login', isNotLoggedIn, async (req, res, next) => {

});

// 로그아웃
router.get('/logout', isLoggedIn, async (req, res) => {

});

module.exports = router;