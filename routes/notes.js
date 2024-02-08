const notes = require('express').Router();


//Function to reading and writing to JSON file
const { readFromFile, readAndAppend } = require('../helper/fsUtils');

// GET reoute to retrieve notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request recieved for note`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for submitting note

notes.post('/', (req, res) => {
    //Log post request recieved
    console.info(`${req.method} request  recieved to submit feedback`);

    //Destructures item in req.body
    const { title, text } = req.body;

    if (title && text) {

        const newNote = {
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

module.exports = notes;