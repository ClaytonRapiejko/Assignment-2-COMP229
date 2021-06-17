let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our business Model
let business = require('../models/business');

let businessController = require('../controllers/business');

/* GET Route for the business List page - READ Operation */
router.get('/', businessController.displaybusinessList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', businessController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', businessController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', businessController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', businessController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', businessController.performDelete);

module.exports = router;