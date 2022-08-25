// const { Client } = require('pg')
// const db = new Client({
//     host: 'localhost',
//     port: 5432,
//     database: 'albums',
//     user: 'postgres',
//     password: 'Shubham@123',
// });
// db.connect()
const { Sequelize } = require('sequelize');
const db = new Sequelize('albums', 'postgres', 'Shubham@123', {
    host: 'localhost',
    dialect: 'postgres'
});
// sequelize.authenticate()
// .then(() => console.log('Connection has been established successfully.'))
// .catch((e)=>console.log(e))

module.exports = db;
