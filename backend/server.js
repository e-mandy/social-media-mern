import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose';
import { authRoute } from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/auth.middleware.js';
import { isLogged } from './controllers/auth.controller.js';

dotenv.config()
const app = express();

app.use(cors({
    origin: `http://localhost:${process.env.CLIENT_PORT}`
}))

app.use(cookieParser())
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/auth/is_logged', authMiddleware, isLogged);

mongoose.connect(`mongodb+srv://${process.env.DATABASE_HOSTNAME}:${process.env.DATABASE_PASSWORD}@cluster0.fkmoapd.mongodb.net/${process.env.DATABASE_NAME}`);

app.listen(process.env.PORT, ()=>{
    console.log('Server is running')
});