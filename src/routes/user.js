const user = require('../controller/user.controller');
const emailValidator = require('../middleware/email.middleware');
const idValidator = require('../middleware/id.middleware');
const passwordValidator = require('../middleware/password.middleware');

const router = require('express').Router();

router.get('/', user.get);
router.get('/profile',user.readProfile)
router.post('/profile',user.createProfile)
router.post('/register', [emailValidator, passwordValidator], user.register);
router.post('/login', user.login)
router.put('/profile',user.updateProfile)
router.delete('/', user.deleteAll);
router.delete('/profile/:id',[idValidator],user.deleteProfile)

module.exports = router;
