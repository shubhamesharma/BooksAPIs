require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded())
const port = 3000;

const route = require('./routes');
const logger = require('./loger');
app.use(express.json())

app.use(route);
logger.error('Error! This is error message!!!!')
logger.info("127.0.0.1 - there's no place like home");
logger.log('warn', "127.0.0.1 - there's no place like home");
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
