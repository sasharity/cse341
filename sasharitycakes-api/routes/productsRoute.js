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

// CREATE PRODUCT
router.get("/products/:id", (req, res) => {
  /* #swagger.tags = ['Products'] */
  
  controller.getSingle(req, res);
});

// POST
router.post("/products", validateProduct, (req, res) => {
  /* #swagger.tags = ['Products'] */
  
  controller.createProduct(req, res);
});

// PUT
router.put("/products/:id", validateProduct, (req, res) => {
  /* #swagger.tags = ['Products'] */

  controller.updateProduct(req, res);
});

// DELETE
router.delete("/products/:id", (req, res) => {
  /* #swagger.tags = ['Products'] */
  
  controller.deleteProduct(req, res);
});

module.exports = router;