'use strict';
 
// Application Dependencies
const express = require('express');
require('dotenv').config();
 
// Application Setup 
const app = express();
const PORT = process.env.PORT || 3000;
 
// Route Definitions
 
// Route Handlers
 
// App listener
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
DeltaV Code School Logo
PORT=3001
server.js
We don't have a homepage yet so the browser displays "Cannot GET /". Let's run a .get() function on our app to respond with a simple greeting. (Lines 12, 16-18)

This code says when someone requests the "/greet" path of our website we want to execute a callback function that responds with a 200 (OK) status code and send them a simple message.

If you add app.use('*', ...), any other requests will be served a 404 (Not found) message. (Line 13, 21-22)

'use strict';
 
// Application Dependencies
const express = require('express');
require('dotenv').config();
 
// Application Setup 
const app = express();
const PORT = process.env.PORT || 3000;
 
// Route Definitions
app.get('/greet', greetHandler);
app.use('*', notFoundHandler);
 
// Route Handlers
function greetHandler(request, response) {
  response.status(200).send('Hello World!');
}
 
function notFoundHandler(request, response) {
  response.status(404).json({ notFound: true });
}
 
// App listener
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));