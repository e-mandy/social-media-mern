const { register, signIn, logout } = require('../controllers/auth.controller');

const router = require('express').Router();


//auth
router.post('/register', register);
router.post('/login', signIn);
router.get('/logout', logout)

module.exports = router;