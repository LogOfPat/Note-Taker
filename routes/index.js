const router = require('express').Router();

//Import routes
const notesRouter = require('./notes');

router.use('/notes', notesRouter);

module.exports = router;