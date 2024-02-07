// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route handler for the root URL
app.get('/', (req, res) => {
    res.send('Restaurant App');
});

// Start the server and listen on port 4000
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
