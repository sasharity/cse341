const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactsController");

router.get("/", contactsController.getAll);
// #swagger.tags = ['Contacts']
//   #swagger.summary = 'Get all contacts'

router.get("/:id", contactsController.getSingle);
// #swagger.tags = ['Contacts']
// #swagger.summary = 'Get contact by ID'


// The put, post and delete routes
router.post("/", contactsController.createContact);
//  #swagger.tags = ['Contacts']
// #swagger.summary = 'Create a new contact'

router.put("/:id", contactsController.updateContact);
// #swagger.tags = ['Contacts']
// #swagger.summary = 'Update a contact'

router.delete("/:id", contactsController.deleteContact);
// #swagger.tags = ['Contacts']
// #swagger.summary = 'Delete a contact'

module.exports = router;