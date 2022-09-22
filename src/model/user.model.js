const { DataTypes } = require('sequelize')
const db = require('../db')

const Users = db.define('users', {

    emailId: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
}, {
    tableName: 'users'
});
// db.sync().then(() => console.log('synced')).catch((e) => console.error('e==>', e))
module.exports = Users;
