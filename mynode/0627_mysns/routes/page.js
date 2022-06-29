const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Sns, Member, Hash } = require('../models');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.member = req.member;
    res.locals.followerCount = req.member ? req.member.Followwers.length : 0;
    res.locals.followingCount = req.member ? req.member.Followings.length : 0;
    res.locals.followerIdList = req.member ? req.member.Followings.map(f => f.id) : [];
    next();
});

// 로그인 or Profile
router.get('/profile', isLoggedIn,(req, res) => {
    res.render('profile', { title: 'MYSNS - 내 정보'});
});

// 회원가입
router.get('/join', isNotLoggedIn,(req, res) => {
    res.render('join', {title: 'MYSNS 회원가입'});
});

router.get('/', async (req, res, next) => {
    try{
        const snss = await Sns.findAll({
            include:{
                model: Member,
                attributes: ['id', 'nick']
            },
            order: [['createdAt', 'DESC']]
        });
        res.render('main', {
            title: 'MYSNS',
            sns: snss
        });
        console.log('유저' + user);
        console.log('유저아이디' + user.id);
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.get('/hashtag', async (req, res, next) => {
    const query = req.query.hash;
    if(!query){
        return res.redirect('/');
    }
    try{
        const hash = await Hash.findOne({ where: { title: query }});
        let lists = [];
        if(hash){
            lists = await hash.getLists({include: [{model: Member}]});
        }
        return res.render('main', {
            title: `${query} | MYSNS`,
            sns: lists
        })
    }catch(err){
        console.log(err);
        return next(err);
    }
})

module.exports = router;