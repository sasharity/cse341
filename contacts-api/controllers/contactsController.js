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

module.exports = { getAll, getSingle };