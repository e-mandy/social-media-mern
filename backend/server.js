require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/user.routes");
require("./config/db");
const app = express();
const cookieParser = require('cookie-parser')
const { checkUser, requireAuth } = require('./middleware/auth.middleware')


app.use(express.json());
app.use(cookieParser())

//jwt
app.use(checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
})

// routes
app.use("/api/users", userRoutes);


//server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});