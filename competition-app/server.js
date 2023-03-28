// Express.js initialization
const express = require('express');
const app = express();
const port = 3000;
// Functions for our Seed data.
const helpers = require('./helpers');
// Fixes issues with CORS between Front-end and Backend.
const cors = require('cors');
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

app.get('/api/products/:id', (req, res) => {
  console.log(req.body);

  // Check if Product ID exists in our Products list.
  if (!Object.keys(products).includes(req.params.id)) {
    res.status(404).send(`Product ID not found.`);
  }

  // Send 'Product object' to client.
  res.status(200).send(products[req.params.id]);

})

// Health Check. Responds with 200 OK.
app.get('/api/health', (req, res) => {
  res.send(200);
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
  if (!Object.keys(products).includes(req.params.id)) {
    res.status(404).send(`Product ID not found.`);
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
        // Issue with Scrum master
  } else if (req.body.scrumMasterName === null || req.body.scrumMasterName === undefined || req.body.scrumMasterName.trim() === "") {
    res.status(417).send(`Scrum Master cannot be empty.`);
    // Issue with Product Owner
  } else if (req.body.productOwnerName === null || req.body.productOwnerName === undefined || req.body.productOwnerName.trim() === "") {
    res.status(417).send(`Product Owner cannot be empty.`);
    // Issue with Developers array being too short or too long
  } else if (req.body.developers.length === 0 || req.body.developers.length > 5) {
    res.status(417).send(`Must assign between 1-5 developers.`);
    // Issue with Start Date
  } else if (req.body.startDate === null || req.body.startDate === undefined || req.body.startDate.trim() === "") {
    res.status(417).send(`Start Date cannot be empty.`);
    // Checks if REQ methodology is in the array of allowed options.
  } else if (!viableMethodologies.includes(req.body.methodology)) {
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

  // If all checks pass, we can create the new Product.
  else {
    // Then we need to insert the new Product into our object, using the request data.
    products[newPosition] = {
      productId: newPosition,
      productName: req.body.productName,
      productOwnerName: req.body.productOwnerName,
      developers: req.body.developers,
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

