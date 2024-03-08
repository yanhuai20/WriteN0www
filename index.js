const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to WriteNow! Our innovative online writing education platform is designed to be engaging, interactive, and fun!');
});

app.get('/courses', (req, res) => {
  res.send('Choose from a wide range of writing courses that will help you develop your skills and unleash your creativity.');
});

app.get('/workshops', (req, res) => {
  res.send('Join our interactive writing workshops, where you can connect with other writers and receive feedback on your work.');
});

app.get('/register', (req, res) => {
  res.send('Ready to unleash your creativity? Register for our platform today and start your writing journey!');
});

// Start the server
app.listen(3000, () => {
  console.log('WriteNow server is running on port 3000.');
});