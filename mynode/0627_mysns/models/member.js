const Sequelize = require('sequelize');
module.exports = class Member extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            email: {
                type: Sequelize.STRING(100),
                allowNull: true,
                unique: true
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true
            },
            nick: {
                type: Sequelize.STRING(30),
                allowNull: this.truncate
            },
            provider: {
                type: Sequelize.STRING(10),
                allowNull: false,
                defaultValue: 'local'
            },
            snsId: {
                type: Sequelize.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Member',
            tableName: 'members',
            paranoid: true,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
        });
    }
    static associate(db) {
        db.Member.hasMany(db.Sns);
        db.Member.belongsToMany(db.Member, {
            foreignKey: 'followingId',
            as: 'Followers',
            through: 'Follow'
        });
        db.Member.belongsToMany(db.Member, {
            foreignKey: 'followerId',
            as: 'Followings',
            through: 'Follow'
        });
    }
}