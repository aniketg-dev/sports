const express = require('express');
const path = require('path');
const app = express();

// Use environment variable PORT or default to 3000
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the sportsIntro.html file when accessing the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'sportsIntro.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'signUp.html'));
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
