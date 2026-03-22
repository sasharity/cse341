

const express = require("express");
const router = express.Router();
const controller = require("../controllers/ordersController");
const { validateOrder } = require("../middleware/validate");

/**
 * #swagger.tags = ['Orders']
 * #swagger.basePath = '/orders'
 */


// GET ALL ORDERS
router.get("/orders", controller.getAll);
/* 
  #swagger.summary = 'Get all orders'
*/

// GET SINGLE ORDER
router.get("/orders/:id", controller.getSingle);
/* 
  #swagger.summary = 'Get a single order by ID'
*/

// CREATE ORDER
router.post("/orders", validateOrder, controller.createOrder);

// UPDATE ORDER
router.put("/orders/:id", validateOrder, controller.updateOrder);
/* 
  #swagger.summary = 'Update an order'
*/

// DELETE ORDER
router.delete("/orders/:id", controller.deleteOrder);
/* 
  #swagger.summary = 'Delete an order'
*/

module.exports = router;