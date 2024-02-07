const express = require('express');
const path = require('path');

const PORT = 8005;

const app = express();

//Middleware for pasring JSON and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware for serving static assets from public
app.use(express.static('public'));



app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Route to send user to notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);