import express from 'express';
import { register } from '../controllers/auth.controller.js'

const userRoute = express.Router();

// Ajout d'un nouvel utilisateur
userRoute.post('/register', register);


export { userRoute };