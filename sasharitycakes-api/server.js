const express = require("express");
const mongodb = require("./data/database");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


app.use("/", require("./routes/ordersRoute"));
app.use("/", require("./routes/productsRoute"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// app.use("/", require("./routes/index"));

mongodb.initDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});