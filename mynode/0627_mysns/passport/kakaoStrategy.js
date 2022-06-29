const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;

const Member = require('../models/member');

module.exports = () => {
    passport.use(new kakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        console.log('kakao profile', profile);
        try{
            const exUser = await Member.findOne({
                where: { snsId: profile.id, provide: 'kakao' }
            });
            if(exUser){ // 로그인 확인
                done(null, exUser);
            }else{ // 로그인이 안된 경우, 회원가입으로 넘김
                const newUser = await Member.create({
                    email: profile._json && profile._json.kakao_account_email,
                    nick: profile.displayName,
                    snsId: profile.id,
                    provider: 'kakao'
                });
                done(null, newUser);
            }
        }catch(err){
            console.error(err);
            done(err);
        }
    }));
}