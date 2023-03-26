const express = require('express');
const app = express();
const port = 3000;
const helpers = require('./helpers');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(function (req, res, next) {
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
||||||||||||||
| POST & PUT |
||||||||||||||
*/

// Add or Edit information on existing product.
app.put('/api/products/:id', (req, res) => {
  console.log(req.body);

  // Check if Product ID exists
  if (!Object.keys(products).includes(req.params.id)) {
    res.status(400).send(`Product ID not found.`);
  }

  if (!req.body) {
    res.status(417).send(`Submission error.`);
  }
  // For error checking Methodology
  let viableMethodologies = ['Waterfall', 'Agile'];

  // Check the request data for any issues, send error status if there are issues.
  // Issues with Product Name
  if (req.body.productName === null || req.body.productName === undefined || req.body.productName.trim() === "") {
    res.status(417).send(`Product Name cannot be empty.`);
    // Issue with Product Owner
  } else if (req.body.productOwnerName === null || req.body.productOwnerName === undefined || req.body.productOwnerName.trim() === "") {
    res.status(417).send(`Product Owner cannot be empty.`);
    // Issue with Developers array
  } else if (req.body.developers.length === 0) {
    res.status(417).send(`Developers cannot be empty.`);
    // Issue with Scrum master
  } else if (req.body.scrumMasterName === null || req.body.scrumMasterName === undefined || req.body.scrumMasterName.trim() === "") {
    res.status(417).send(`Scrum Master cannot be empty.`);
    // Issue with Start Date
  } else if (req.body.startDate === null || req.body.startDate === undefined || req.body.startDate.trim() === "") {
    res.status(417).send(`Start Date cannot be empty.`);
    // Checks if REQ methodology is in the array of allowed options.
  } else if (!viableMethodologies.includes(req.body.methodology)) {
    res.status(417).send(`You must select a Methodology.`);
  }

  // If all checks are passed, we can edit the product.
  else {
    // Then we need to edit the Product and give it the new data.
    products[req.params.id] = {
      productId: Number(req.params.id),
      productName: req.body.productName,
      productOwnerName: req.body.productOwnerName,
      Developers: req.body.developers,
      scrumMasterName: req.body.scrumMasterName,
      startDate: req.body.startDate,
      methodology: req.body.methodology
    }
    // Some visual that it's finished.
    console.log(`Product ${req.params.id} edited!`);
    // Send 'Created' status to client.
    res.status(201).send(`Product edit successful.`);
  }
})



//CREATE New Product.
app.post('/api/products', (req, res) => {
  console.log(req.body);

  if (!req.body) {
    res.status(417).send(`Submission error.`);
  }
  // Finds what productId we need to give our new product.
  let newPosition = Object.keys(products).length + 1;

  // For error checking
  let viableMethodologies = ['Waterfall', 'Agile'];

  // Check the request data for any issues, send error status if there are issues.
  // Issues with Product Name
  if (req.body.productName === null || req.body.productName === undefined || req.body.productName.trim() === "") {
    res.status(417).send(`Product Name cannot be empty.`);
    // Issue with Product Owner
  } else if (req.body.productOwnerName === null || req.body.productOwnerName === undefined || req.body.productOwnerName.trim() === "") {
    res.status(417).send(`Product Owner cannot be empty.`);
    // Issue with Developers array
  } else if (req.body.developers.length === 0) {
    res.status(417).send(`Developers cannot be empty.`);
    // Issue with Scrum master
  } else if (req.body.scrumMasterName === null || req.body.scrumMasterName === undefined || req.body.scrumMasterName.trim() === "") {
    res.status(417).send(`Scrum Master cannot be empty.`);
    // Issue with Start Date
  } else if (req.body.startDate === null || req.body.startDate === undefined || req.body.startDate.trim() === "") {
    res.status(417).send(`Start Date cannot be empty.`);
    // Checks if REQ methodology is in the array of allowed options.
  } else if (!viableMethodologies.includes(req.body.methodology)) {
    res.status(417).send(`You must select a Methodology.`);
  }

  // If all checks are passed, we can create the new Product.
  else {
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
    // Some visual that it's finished.
    console.log(`Product ${newPosition}: ${products[newPosition].productName} added!`);
    // Send 'Created' status to client.
    res.status(201).send(`Product creation successful.`);
  }
})


app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});

