const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        try{
            const exUser = await User.findOne({ where: { email }});
            if(exUser){
                const result = await bcrypt.compare(password, exUser.password); // 함호화된 비밀번호 확인
                if(result){
                    done(null, exUser);
                }else{
                    done(null, false, { message: '비밀번호가 일치하지 않습니다.'});
                }
            }else{
                done(null, false, { message: '없는 이메일입니다. 디시 확인하세요.' });
            }
        }catch(err){
            console.error(err);
            done(err);
        }
    }))
}