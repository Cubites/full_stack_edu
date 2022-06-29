const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const Member = require('../models/member');

module.exports = () => {
    //serializeUser
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    //deserializeUser
    passport.deserializeUser((id, done) => {
        Member.findOne({ 
            where: { id },
            include: [{
                model: Member,
                attributes: ['id', 'nick'],
                as: 'Followers'
            },{
                model: Member,
                attributes: ['id', 'nick'],
                as: 'Followings'
            }]
        })
            .then(user => done(null, user))
            .catch(err => done(err));
    });
    local();
    kakao();
}