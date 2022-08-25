const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded())
const port = 3000;

const route = require('./routes');
app.use(express.json())

app.use(route);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
