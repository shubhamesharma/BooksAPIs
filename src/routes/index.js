
const router = require('express').Router();


const book = require('./book');

router.use('/', book);

module.exports = router;