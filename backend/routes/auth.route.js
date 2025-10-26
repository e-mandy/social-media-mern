import express from 'express';
import { register, login } from '../controllers/auth.controller.js'

const userRoute = express.Router();

// Ajout d'un nouvel utilisateur
userRoute.post('/register', register);

userRoute.post('/login', login)


export { userRoute };