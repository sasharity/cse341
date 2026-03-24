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

// For the get single 
const getSingle = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const id = new ObjectId(req.params.id);
        const result = await db.collection("products").find({_id: id});
      
        const data = await result.toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Post 
const createProduct = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const result = await db.collection("products").insertOne(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
};

// PUT
const updateProduct = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const id = new ObjectId(req.params.id);

    const result = await db.collection("products").replaceOne({ _id: id }, req.body);

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteProduct = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const id = new ObjectId(req.params.id);

    await db.collection("products").deleteOne({ _id: id });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAll, getSingle, createProduct, updateProduct, deleteProduct };
