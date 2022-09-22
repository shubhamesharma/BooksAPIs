const { DataTypes } = require('sequelize')
const db = require('../db')

const Profile = db.define('profiles', {
    FirstName: { type: DataTypes.STRING},
    LastName: { type: DataTypes.STRING},
    Address: { type: DataTypes.STRING},
    Age: { type: DataTypes.INTEGER},
    Qualification: { type: DataTypes.STRING},
},{
    tableName:'profiles'
});

// db.sync().then(() => console.log('synced')).catch((e) => console.error('e==>', e));

module.exports = Profile;