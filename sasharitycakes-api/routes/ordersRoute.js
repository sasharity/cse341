
const express = require("express");
const router = express.Router();
const controller = require("../controllers/ordersController");
const { validateOrder } = require("../middleware/validate");

/* #swagger.tags = ['Orders'] */

// GET ALL ORDERS
router.get("/", controller.getAll);
/* 
  #swagger.summary = 'Get all orders'
*/

// GET SINGLE ORDER
router.get("/:id", controller.getSingle);
/* 
  #swagger.summary = 'Get a single order by ID'
*/

// CREATE ORDER
router.post("/", validateOrder, controller.createOrder);
/* 
  #swagger.summary = 'Create a new order'
  #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Order data',
    required: true,
    schema: {
      customerName: 'Chiamaka Okafor',
      email: 'chiamaka@email.com',
      phone: '08034567890',
      eventType: 'Wedding',
      cakeFlavor: 'Red Velvet',
      deliveryDate: '2026-06-12',
      price: 75000
    }
  }
*/

// UPDATE ORDER
router.put("/:id", validateOrder, controller.updateOrder);
/* 
  #swagger.summary = 'Update an order'
*/

// DELETE ORDER
router.delete("/:id", controller.deleteOrder);
/* 
  #swagger.summary = 'Delete an order'
*/

module.exports = router;