const router = require('express').Router();
const {listModels, textCompletion, testStream} = require('../controllers/api');

router.get('/list', listModels);
router.post('/text', textCompletion)
router.get('/test', testStream)

module.exports = router;
