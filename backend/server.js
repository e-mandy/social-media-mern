const express = require('express');
require('dotenv').config()
const app = express();

const userRoute = require('./routes/auth.route');

const port = 3000;


app.use(express.json());

app.use('/api/users', userRoute);

mongoose.connect(`mongodb+srv://${process.env.DATABASE_HOSTNAME}:${process.env.DATABASE_PASSWORD}@cluster0.j31roky.mongodb.net/${process.env.DATABASE_NAME}`);

app.listen(process.env.PORT, ()=>{
    console.log('Server is running')
});
