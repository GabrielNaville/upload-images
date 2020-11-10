const { Router } = require('express');
const image = require('./image');
const router = require('express').Router();

router.use('/image', image);

module.exports = router;