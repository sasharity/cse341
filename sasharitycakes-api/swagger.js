const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Sasharity Cakes API",
    description: "API for managing cakes, orders, and products"
  },
    host: "sasharitycakes-api.onrender.com/:8080",
  schemes: ["https"]
};

const outputFile = "./swagger-output.json";

const endpointsFiles = [
  "./routes/ordersRoute.js", "./routes/productsRoute.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);