const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const { validateProduct } = require("../middleware/validate");
const isAuthenticated = require("../middleware/authenticate");


/**
 * #swagger.tags = ['Products']
 * #swagger.path = '/products'
 */

// GET ALL PRODUCTS
router.get("/products", (req, res) => {
  /* #swagger.tags = ['Products'] 
    #swagger.summary = 'Get all products'
  */
  
  controller.getAll(req, res);
});

// Get single PRODUCT
router.get("/products/:id", (req, res) => {
  /* #swagger.tags = ['Products'] 
    #swagger.summary = 'Get a product by Id'
  */
  
  controller.getSingle(req, res);
});

// POST
router.post("/products", isAuthenticated, validateProduct, (req, res) => {
  /* #swagger.tags = ['Products'] 
    #swagger.summary = 'Create a product'
    #swagger.security = [{ "githubAuth": [] }]
  */
  
  controller.createProduct(req, res);
});

// PUT
router.put("/products/:id", isAuthenticated, validateProduct, (req, res) => {
  /* 
    #swagger.tags = ['Products']
    #swagger.summary = 'Update a product'
    #swagger.security = [{ "githubAuth": [] }]
  */

  controller.updateProduct(req, res);
});

// DELETE
router.delete("/products/:id", isAuthenticated, (req, res) => {
  /* 
    #swagger.tags = ['Products']
    #swagger.summary = 'Delete a product'
    #swagger.security = [{ "githubAuth": [] }]
  */

  controller.deleteProduct(req, res);
});

module.exports = router;