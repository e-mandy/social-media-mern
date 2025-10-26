import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userRoute } from './routes/auth.route.js';
import { authMiddleware } from './middlewares/auth.middleware.js';
dotenv.config()
const app = express();

app.use(express.json());

app.use('/api/users', userRoute);

mongoose.connect(`mongodb+srv://${process.env.DATABASE_HOSTNAME}:${process.env.DATABASE_PASSWORD}@cluster0.fkmoapd.mongodb.net/${process.env.DATABASE_NAME}`);

app.listen(process.env.PORT, ()=>{
    console.log('Server is running')
});