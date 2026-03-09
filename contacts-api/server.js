const express = require("express");
const mongodb = require("./data/database");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/", require("./routes/index"))

app.use("/contacts", require("./routes/contactsRoute"));

mongodb.initDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});