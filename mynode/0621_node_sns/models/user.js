const Sequelize = require('sequelize');
/*
    사용자 정보 저장
    - 이메일, 닉네임, 비밀번호를 저장하고
    SNS 로그인(카카오로그인) 했을 경우 provider와 snsId를 저장
    provider가 local 이면 로컬 로그인, kakao이면 카카오 로그인

    테이블 옵션에 timestamps와 paranoid가 true 이므로 
    테이블 생성 시, createdAt, updatedAt, deletedAt 컬럼이 생성됨
*/
module.exports = class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            email: {
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true
            },
            nick: {
                type: Sequelize.STRING(15),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true
            },
            provider: {
                type: Sequelize.STRING(10),
                allowNull: false,
                defaultValue : 'local'
            },
            snsId: {
                type: Sequelize.STRING(30),
                allowNull: true
            }
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db){ 
        db.User.hasMany(db.Post); // User 와 Post 1:N의 관계 (1:1은 hasMany가 아닌 belong등 사용)
        db.User.belongsToMany(db.User, {
            foreignKey: 'followingId',
            as: 'Followers',
            through: 'Follow'
        });
        db.User.belongsToMany(db.User, {
            foreignKey: 'followerId',
            as: 'Followings',
            through: 'Follow'
        });
    }
}