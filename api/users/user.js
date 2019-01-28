const express = require('express');
const router = express.Router();
const controller = require('./user.controller');


router.post('/', controller.createUser);


module.exports = router;