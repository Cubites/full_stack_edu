const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User, Hashtag } = require('../models'); // table selection

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = req.user ? req.user.Follows.length : 0;
    res.locals.followingCount = req.user ? req.user.Follows.length : 0;
    res.locals.followerIdList = req.user ? req.user.Follows.map(f = f.id) : [];
    next();
})

// 내정보
router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile', {title: '내 정보 - NodeWitter'});
});
// 회원가입
router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', {title: '회원가입 - NodeWitter'});
});

// 메인
router.get('/', (req, res, next) => {
    res.send('메인');
});

module.exports = router;