const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;


const getAll = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const result = await db.collection("products").find();
        const data = await result.toArray(); 
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// To add a product
const createProduct = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const result = await db.collection("products").insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAll, createProduct };