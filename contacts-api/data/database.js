const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let database;

const initDb = async () => {
  if (database) {
    return database;
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    database = client.db("contactsDB");
    console.log("Database connected");
    return database;
  } catch (err) {
    console.error(err);
  }
};

const getDb = () => {
  if (!database) {
    throw Error("Database not initialized");
  }
  return database;
};

module.exports = { initDb, getDb };