const { Router, response } = require('express');
const router = Router();

const { renderAbout, renderIndex } = require('../controllers/index.controller');

router.get('/', renderIndex);

router.get('/about', renderAbout);

module.exports = router;