// Through this line I have imported the Epress module
const express = require('express');

// Through this line I have created an express application
const app = express();

// The line defines the port number where the server will listen
const PORT = 3000;

// This line uses express.static middleware to serve static files (like HTML, CSS, JS) from the "public" directory
app.use(express.static('public'));

// This line starts the server and now the server will listen to the specific port number that I have defined above
// When the server starts,it will also log a message to the console
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
