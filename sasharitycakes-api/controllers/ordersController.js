// const { getSingle } = require("../../contacts-api/controllers/contactsController");
const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;


// For the get all
const getAll = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const result = await db.collection("orders").find();
        const data = await result.toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// For the get single 
const getSingle = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const id = new ObjectId(req.params.id);
        const result = await db.collection("orders").find({_id: id});
      
        const data = await result.toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Post 
const createOrder = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const result = await db.collection("orders").insertOne(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
};

// PUT
const updateOrder = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const id = new ObjectId(req.params.id);

    const result = await db.collection("orders").replaceOne({ _id: id }, req.body);

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteOrder = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const id = new ObjectId(req.params.id);

    await db.collection("orders").deleteOne({ _id: id });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAll, getSingle, createOrder, updateOrder, deleteOrder };
