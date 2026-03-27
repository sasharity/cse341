const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Sasharity Cakes API",
    description: "API for managing cakes, orders, and products"
  },
    host: "sasharitycakes-api.onrender.com",
    schemes: ["https"],
    
    components: {
    securitySchemes: {
      githubAuth: {
        type: "oauth2",
        
      }
    }
  }
};

const outputFile = "./swagger-output.json";

const endpointsFiles = [
  "./routes/ordersRoute.js",
  "./routes/productsRoute.js", 
  "./routes/authRoute.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);