// Express.js initialization
const express = require('express');
const app = express();
const port = 3000;
// Functions for our Seed data.
const helpers = require('./helpers');
// Fixes issues with CORS between Front-end and Backend.
const cors = require('cors');
// For input sanitizing
const { check, validationResult } = require('express-validator');
app.use(cors());

// Read JSON data from frontend.
app.use(express.json());
// More CORS fixing, allow all the things.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set Product list using our Seed data. See './helpers.js' for details.
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

// SEARCH
// By Developer

app.get('/api/search/developer/:developerName', (req, res) => {
  // Reset our subset each query.
  let productsSubset = {};
  // Grab all our Products in a way we can easily iterate through
  let values = Object.values(products);
  // Go through each Product object
  for (const value of values) {
    // Go through our array of Developers
    for (const dev of value.developers) {
      // Check if the search name exists in the array. Convert all values to lower case for comparison.
      if (dev.toLocaleLowerCase().includes(req.params.developerName.toLocaleLowerCase())) {
        // If the name exists in the list of devs, add the entire key to our subset list of products.
        productsSubset[value.productId] = value;
      }
    }
  }
  res.send(productsSubset);
})

// By Scrum Master
app.get('/api/search/scrummaster/:scrumMasterName', (req, res) => {
  // Reset our subset each query.
  let productsSubset = {};
  // Grab all our Products in a way we can easily iterate through
  let values = Object.values(products);
  // Go through each Product object
  for (const value of values) {
    // Compare the scrum master in the product to the search term. Compare only in lower case. Sanitize.
    if (value.scrumMasterName.toLocaleLowerCase().includes(req.params.scrumMasterName.escape().toLocaleLowerCase())) {
      // if we have a match, add the product to our subset.
      productsSubset[value.productId] = value;
    }
  }
  // respond with the data (automatic 200 OK)
  res.send(productsSubset);
})


// Specific product request, done by productId.
app.get('/api/products/:id', (req, res) => {
  console.log(req.body);

  // Check if Product ID exists in our Products list.
  if (!Object.keys(products).includes(req.params.id.escape())) {
    res.status(404).send(`Product ID not found.`);
  }

  // Send 'Product object' to client.
  res.status(200).send(products[req.params.id.escape()]);

})

// Health Check. Responds with 200 OK.
app.get('/api/health', (req, res) => {
  res.sendStatus(200);
})

/*
|||||||
| PUT |
|||||||
*/

// Add or Edit information on existing product.
app.put('/api/products/:id', (req, res) => {
  console.log(req.body);

  // Check if Product ID exists
  if (!Object.keys(products).includes(req.params.id.escape())) {
    res.status(404).send(`Product ID not found.`);
  }

  if (!req.body) {
    res.status(417).send(`Submission error.`);
  }
  // For error checking Methodology
  let viableMethodologies = ['Waterfall', 'Agile'];

  // Check the request data for any issues, send error status if there are issues.
  // Issues with Product Name
  if (req.body.productName.escape() === null || req.body.productName.escape() === undefined || req.body.productName.escape().trim() === "") {
    res.status(417).send(`Product Name cannot be empty.`);
    // Issue with Scrum master
  } else if (req.body.scrumMasterName.escape() === null || req.body.scrumMasterName.escape() === undefined || req.body.scrumMasterName.escape().trim() === "") {
    res.status(417).send(`Scrum Master cannot be empty.`);
    // Issue with Product Owner
  } else if (req.body.productOwnerName.escape() === null || req.body.productOwnerName.escape() === undefined || req.body.productOwnerName.escape().trim() === "") {
    res.status(417).send(`Product Owner cannot be empty.`);
    // Issue with Developers array being too short or too long
  } else if (req.body.developers.length === 0 || req.body.developers.length > 5) {
    res.status(417).send(`Must assign between 1-5 developers.`);
    // Issue with Start Date
  } else if (req.body.startDate.escape() === null || req.body.startDate.escape() === undefined || req.body.startDate.escape().trim() === "") {
    res.status(417).send(`Start Date cannot be empty.`);
    // Checks if REQ methodology is in the array of allowed options.
  } else if (!viableMethodologies.includes(req.body.methodology.escape())) {
    res.status(417).send(`You must select a Methodology.`);
  }

  // If all checks pass, we can edit the product.
  else {
    // Then we need to edit the Product and give it the new data.
    products[req.params.id] = {
      productId: Number(req.params.id),
      productName: req.body.productName,
      productOwnerName: req.body.productOwnerName,
      developers: req.body.developers,
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

/*
||||||||
| POST |
||||||||
*/

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
    if (req.body.productName.escape() === null || req.body.productName.escape() === undefined || req.body.productName.escape().trim() === "") {
      res.status(417).send(`Product Name cannot be empty.`);
      // Issue with Scrum master
    } else if (req.body.scrumMasterName.escape() === null || req.body.scrumMasterName.escape() === undefined || req.body.scrumMasterName.escape().trim() === "") {
      res.status(417).send(`Scrum Master cannot be empty.`);
      // Issue with Product Owner
    } else if (req.body.productOwnerName.escape() === null || req.body.productOwnerName.escape() === undefined || req.body.productOwnerName.escape().trim() === "") {
      res.status(417).send(`Product Owner cannot be empty.`);
      // Issue with Developers array being too short or too long
    } else if (req.body.developers.length === 0 || req.body.developers.length > 5) {
      res.status(417).send(`Must assign between 1-5 developers.`);
      // Issue with Start Date
    } else if (req.body.startDate.escape() === null || req.body.startDate.escape() === undefined || req.body.startDate.escape().trim() === "") {
      res.status(417).send(`Start Date cannot be empty.`);
      // Checks if REQ methodology is in the array of allowed options.
    } else if (!viableMethodologies.includes(req.body.methodology.escape())) {
      res.status(417).send(`You must select a Methodology.`);
    }

  // If all checks pass, we can create the new Product.
  else {
    // Then we need to insert the new Product into our object, using the request data.
    products[newPosition] = {
      productId: newPosition,
      productName: req.body.productName.escape(),
      productOwnerName: req.body.productOwnerName.escape(),
      developers: req.body.developers.escape(),
      scrumMasterName: req.body.scrumMasterName.escape(),
      startDate: req.body.startDate.escape(),
      methodology: req.body.methodology.escape()
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

