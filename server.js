var express = require('express');

// Create our app
var app = express();
// Tell it which folder to server
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Your react app is up and running on port 3000');
});
