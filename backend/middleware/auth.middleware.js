const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt
    console.log(token)
    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if(err){
                res.locals.user = null;
                res.cookie('jwt', '', { maxAge: 1 })
            }else{
                let user = await userModel.findById(decodedToken.id)
                res.locals.user = user
                console.log(user)
            }
            return next()
        })
    }else{
        res.locals.user = null;
        return next()
    }
}

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if(err){
                console.log(err)
            }else{
                console.log(decodedToken.id)
                return next()
            }
        })
    }else{
        console.log('No token')
    }
}


module.exports = { checkUser, requireAuth }