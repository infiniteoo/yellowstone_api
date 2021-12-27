const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
const connectDB = require("./config/db");

app.use(express.json({ extended: false }));

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

//connect to mongoose
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
  console.log("API documentation: http://localhost:3000/doc");
});

/* Endpoints */
require("./src/endpoints")(app);
