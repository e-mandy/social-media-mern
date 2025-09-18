const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.j31roky.mongodb.net/social-media"
  )
  .then(console.log("Connection establish with the database"))
  .catch((err) => console.log(err));
