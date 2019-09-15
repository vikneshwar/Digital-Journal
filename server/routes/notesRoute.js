const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const notesController = require('../controller/notesController');

router.use(jwt({ secret: process.env.JWT_SECRET }));

router.get('/', notesController.getNotes);
router.post('/', notesController.addNote);
router.put('/:id', notesController.editNote);
router.delete('/:id', notesController.deleteNote);

module.exports = router;
