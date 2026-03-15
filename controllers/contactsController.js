const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const db = mongodb.getDb();
  const result = await db.collection("contacts").find();
  const contacts = await result.toArray();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(contacts);
};

const getSingle = async (req, res) => {
  const db = mongodb.getDb();
  const contactId = new ObjectId(req.params.id);
  const result = await db.collection("contacts").find({ _id: contactId });
  const contacts = await result.toArray();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(contacts[0]);
};

// Create a POST route to create a new contact. All fields are required. Return the new contact id in the response body
const createContact = async (req, res) => {
  const db = mongodb.getDb();
   
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const response = await db.collection("contacts").insertOne(contact);

  if (response.acknowledged) {
    res.status(201).json(response.insertedId);
  } else {
    res.status(500).json(response.error || "Error creating contact");
  }
};

// Create a PUT route to update a contact. This route should allow for a url similar to this: api-url-path/contacts/id-to-modify. (The id won't be modified, it will just be the means of finding a specific document in the database.) Return an http status code representing the successful completion of the request
const updateContact = async (req, res) => {
  const db = mongodb.getDb();
  const contactId = new ObjectId(req.params.id);

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  // Create a DELETE route to delete a contact. Return an http status code representing the successful completion of the request.
  const response = await db.collection("contacts").replaceOne({ _id: contactId }, contact);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error updating contact");
  }
};

const deleteContact = async (req, res) => {
  const db = mongodb.getDb();
  const contactId = new ObjectId(req.params.id);

  const response = await db.collection("contacts").deleteOne({ _id: contactId });

  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || "Error deleting contact");
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
};