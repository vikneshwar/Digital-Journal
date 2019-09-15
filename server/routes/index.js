const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');
const notesRoute = require('./notesRoute');

router.use('/user', userRoute);
router.use('/notes', notesRoute);

module.exports = router;
