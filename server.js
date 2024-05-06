const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public', { extensions: ['html', 'css', 'js', 'mp3'] }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route to render the music player with a specific player ID
app.get('/miniplayer/:playerId', (req, res) => {
    const playerId = req.params.playerId;
    res.render('miniplayer', { playerId });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
