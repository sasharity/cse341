const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const { validateProduct } = require("../middleware/validate");

/* #swagger.tags = ['Products'] */

// GET ALL PRODUCTS
router.get("/", controller.getAll);
/* 
  #swagger.summary = 'Get all products'
*/

// CREATE PRODUCT
router.post("/", validateProduct, controller.createProduct);
/* 
  #swagger.summary = 'Create a new product'
  #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Product data',
    required: true,
    schema: {
      name: 'Chocolate Cake',
      category: 'Cake',
      price: 20000
    }
  }
*/

module.exports = router;