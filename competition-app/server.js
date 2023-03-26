const express = require('express');
const app = express();
const port = 3000;
const helpers = require('./helpers');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let products = helpers.returnPremadeProducts();
/*
|||||||
| GET |
|||||||
*/

// READ all Products. Responds with object of Products.
app.get('/api', (req, res) => {
  res.send(products);

})

// Health Check. Responds with 200 OK.
app.get('/api/health', (req, res) => {
  res.send(200);
})

/*
||||||||
| POST |
||||||||
*/

//CREATE New Product.
app.post('/api/products', (req, res) => {

  // Finds what productId we need to give our new product.
  let newPosition = Object.keys(products).length + 1;

  // Then we need to insert the new Product into our object, using the request data.
  products[newPosition] = {
    productId: newPosition,
    productName: req.body.productName,
    productOwnerName: req.body.productOwnerName,
    Developers: req.body.developers,
    scrumMasterName: req.body.scrumMasterName,
    startDate: req.body.startDate,
    methodology: req.body.methodology
  }
})


app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});

