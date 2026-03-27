

const express = require("express");
const router = express.Router();
const controller = require("../controllers/ordersController");
const { validateOrder } = require("../middleware/validate");
const isAuthenticated = require("../middleware/authenticate")
/**
 * #swagger.tags = ['Orders']
 * #swagger.basePath = '/orders'
 */


// GET ALL ORDERS
router.get("/orders", (req, res) => {
  /* #swagger.tags = ['Orders'] 
    #swagger.summary = 'Get all orders'
  */
  
  controller.getAll(req, res);
});


// GET SINGLE ORDER
router.get("/orders/:id", (req, res) => {
  /* #swagger.tags = ['Orders'] 
    #swagger.summary = 'Get a order by Id'
  */
  
  controller.getSingle(req, res);
});

// CREATE ORDER
router.post("/orders", isAuthenticated, validateOrder, (req, res) => {
  /* 
  #swagger.tags = ['Orders']
  #swagger.summary = 'Create an order'
  #swagger.security = [{ "githubAuth": [] }]
*/
  controller.createOrder(req, res)
});


// UPDATE ORDER
router.put("/orders/:id", isAuthenticated, validateOrder, (req, res) => {
  /* 
  #swagger.tags = ['Orders']
  #swagger.summary = 'Update an order'
  #swagger.security = [{ "githubAuth": [] }]
*/
  controller.updateOrder(req, res)
});


// DELETE ORDER
router.delete("/orders/:id", isAuthenticated, (req, res) => {
  /* 
  #swagger.tags = ['Orders']
  #swagger.summary = 'Delete an order'
  #swagger.security = [{ "githubAuth": [] }]
*/
  controller.deleteOrder(req, res)
});



module.exports = router;