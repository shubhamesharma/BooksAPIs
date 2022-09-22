
const router = require('express').Router();


const authenticateToken = require('../middleware/authenticateToken.middleware');
const generateAccessToken = require('../utility/generateAccessToken');
const book = require('./book');
const user = require('./user');

router.use('/user', [authenticateToken], user);
router.use('/generate-token', (req, res) => {
    const token = generateAccessToken('shubham');
    res.status(200).send({
        token: token
    })
});

router.use('/', [authenticateToken], book);
// router.use('/user', user);

module.exports = router;