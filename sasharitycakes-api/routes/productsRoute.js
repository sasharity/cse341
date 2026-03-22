const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const { validateProduct } = require("../middleware/validate");

/**
 * #swagger.tags = ['Products']
 * #swagger.path = '/products'
 */

// GET ALL PRODUCTS
router.get("/products", (req, res) => {
  /* #swagger.tags = ['Products'] */
  
  controller.getAll(req, res);
});

// GET SINGLE Product
router.get("/products/:id", controller.getSingle);
/* 
  #swagger.summary = 'Get a single Product by ID'
*/

// CREATE Product
router.post("/products", validateProduct, controller.createProduct);

// UPDATE ORDER
router.put("/products/:id", validateProduct, controller.updateProduct);
/* 
  #swagger.summary = 'Update an order'
*/

// DELETE Product
router.delete("/products/:id", controller.deleteProduct);
/* 
  #swagger.summary = 'Delete an Product'
*/

module.exports = router;