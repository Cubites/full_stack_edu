const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const Member = require('../models/member');

const router = express.Router();

// 회원가입 페이지
/*
    1. 같은 이메일이 있다면 에러를 출력하고 회원가입 페이지로 되돌림
    2. 같은 이메일이 없다면 비밀번호를 bcrypt의 hash 메서드를 이용하여 암호화
    3. 12줄의 숫자로 암호화 (12자 추천 31자까지 사용할 수 있음. 숫자가 클 수록 해킹하기 어려움.)
        - 프로미스를 지원하는 함수이므로 await를 사용함
*/
router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const { email,  nick, password } = req.body;
    try{
        const exUser = await Member.findOne({ where: { email }});
        if(exUser){
            return res.redirect('/join?error=exist');
        }
        const hash = await bcrypt.hash(password, 12);
        await Member.create({
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

// 로그인 페이지
/*
    - passport.authenticate('local') : 미들웨어이므로 local 전략을 수행
    - 구조는 라우터 미들웨어 안에 들어가 있는 미들웨어
*/
router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
});

// 로그아웃
router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect();
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/');
});

module.exports = router;