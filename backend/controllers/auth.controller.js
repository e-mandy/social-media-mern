const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken');
const { signUpError } = require('../utils/errors.utils');

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}

const register = async (req, res) => {
    const {pseudo, email, password} = req.body;

    try{
        const user = await userModel.create({pseudo, email, password});
        res.status(200).json(user._id)
    }catch(error){
        const signErr = signUpError(error)
        res.status(400).json({ err: signErr })
    }
}

const signIn = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.login(email, password);
        console.log("Je viens ici")
        
        res.status(200).json({
            user: user._id
        })
    } catch (error) {
        console.log(error)
    }
}

const logout = async(req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/');
}

module.exports = { register, signIn, logout }