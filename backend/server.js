const express = require('express');
const app = express();

const userRoute = require('./routes/auth.route');

const port = 3000;


app.use(express.json());

app.use('/api/users', userRoute);

app.listen(port, ()=>{
    console.log('Server is running')
});