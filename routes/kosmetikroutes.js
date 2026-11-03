const express = require('express');
const router = express.Router();
const kosmetikRoutes = require('./routes/kosmetikroutes');
const c = require('../controllers/kosmetikcontrollers');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', c.getAll);
router.get('/:id', c.getById);
router.post('/', cekApiKey, c.create);

module.exports = router;