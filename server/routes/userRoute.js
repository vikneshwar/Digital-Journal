const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
router.post('/login', userController.login);
router.post('/signUp', userController.signUp);
router.post('/verifyToken', userController.verifyToken);

module.exports = router;
