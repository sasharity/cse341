const express = require("express");
const mongodb = require("./data/database");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
const session = require("express-session");
const passport = require("./passport");


require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

// For the seeion
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false
    }
  })
);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());

// for the routes 
app.use("/", require("./routes/authRoute"));
app.use("/", require("./routes/ordersRoute"));
app.use("/", require("./routes/productsRoute"));
app.use("/", require("./routes/index"));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));



mongodb.initDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});