const express = require('express');
const earthController = require('../controllers/earthController');

const router = express.Router();

router.post('/addEarth', earthController.addEarth);

router.get('/cities', earthController.getAllCity);
router.get('/countries', earthController.getAllCountry);
router.get('/directions', earthController.getAllDirections);
router.get('/estateTypes', earthController.getAllEstateTypes);
router.get('/propertyTypes', earthController.getAllPropertyType);

module.exports = router;
