const book = require('../controller/book.controller');
const { ablumValidator } = require('../middleware/album.middleware');
const idValidator = require('../middleware/id.middleware');
const { titlevalidator } = require('../middleware/title.middleware');

const router = require('express').Router();

router.get('/:id', [idValidator], book.getById)
router.get('/', [ablumValidator, titlevalidator], book.get);
router.post('/', book.create)
router.put('/', [ablumValidator], book.put)
router.delete('/', book.deleteBook)


module.exports = router;

