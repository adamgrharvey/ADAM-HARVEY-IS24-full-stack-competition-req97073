const express = require('express');
const app = express();
const port = 3000;
const helpers = require('./helpers');

let products = helpers.generateProducts();
/*
|||||||
| GET |
|||||||
*/
app.get('/api', (req, res) => {
  console.log(Object.keys(products).length);
  res.send(products);
  
  
})

// Health Check
app.get('/api/health', (req, res) => {
  res.send(200);
})


app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});

