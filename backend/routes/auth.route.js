import express from 'express';
import { register, login, isLogged } from '../controllers/auth.controller.js'

const authRoute = express.Router();

// Ajout d'un nouvel utilisateur
authRoute.post('/register', register);

authRoute.post('/login', login)

authRoute.get('/isLogged', isLogged)

export { authRoute };