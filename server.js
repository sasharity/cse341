const express = require("express");
const mongodb = require("./contacts-api/data/database");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./contacts-api/swagger-output.json");

require("dotenv").config();


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/", require("./contacts-api/routes/index"))

app.use("/contacts", require("./contacts-api/routes/contactsRoute"));

// app.get("/test", (req,res)=>{
//   res.send("Test route works")
// });

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongodb.initDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});