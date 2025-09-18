require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/user.routes");
require("./config/db");
const app = express();

app.use(express.json());

// routes
app.use("/api/users", userRoutes);


//server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});