const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

// router
//   .route('/')
//   .get(productsController.getAllProducts)
//   .post(productsController.createProduct);
// router
//   .route('/:id')
//   .get(productsController.getProduct)
//   .delete(productsController.deleteProduct)
//   .put(productsController.updateProductWithAdminDashboard);

router.route('/countries').get(homeController.getAllCountry);
router.route('/cities').get(homeController.getAllCity);

module.exports = router;
