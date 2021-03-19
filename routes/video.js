const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');

const videoCtrl = require('../controllers/video');

router.post('/', multer, videoCtrl.resize);

module.exports = router;