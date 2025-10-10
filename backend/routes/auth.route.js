const express = require('express')
const router = express.Router();
const { register } = require('../controllers/auth.controller')

// Ajout d'un nouvel utilisateur
router.post('/register', register);


module.exports = router;