const { DataTypes } = require('sequelize');
const db = require('../db');

const Photos = db.define('photos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    albumId: {
        type: DataTypes.INTEGER
    },

    title: {
        type: DataTypes.TEXT
    },
    url: {
        type: DataTypes.TEXT
    },
    thumbnailURL: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'photos'
});


module.exports = {
    Photos
}