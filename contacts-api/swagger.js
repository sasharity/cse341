const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API for managing contacts"
  },
  host: "https://cse341-1-tqxv.onrender.com",
  schemes: ["https"]
};

const outputFile = "./swagger-output.json";

const endpointsFiles = ["./routes/contactsRoute.js"];


// this will then autogenerate the json files
swaggerAutogen(outputFile, endpointsFiles, doc); 