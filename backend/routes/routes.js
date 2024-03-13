const express = require('express');
const router = express.Router();

const appController = require('../controllers/main_ctrl');

router.get('/get-users', appController.getUser);

module.exports = router;