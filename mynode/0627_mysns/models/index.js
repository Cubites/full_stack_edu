const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const Member = require('./member');
const Sns = require('./sns');
const Hash = require('./hash');

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Member = Member;
db.Sns = Sns;
db.Hash = Hash;

Member.init(sequelize);
Sns.init(sequelize);
Hash.init(sequelize);

Member.associate(db);
Sns.associate(db);
Hash.associate(db);

module.exports = db;