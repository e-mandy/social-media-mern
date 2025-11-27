import jwt from 'jsonwebtoken';
import { refreshAccessToken } from '../controllers/auth.controller.js';

const authMiddleware = (req, res, next) => {
    const access_token = req.headers.authorization;
    console.log(access_token)
    
    try{
        if(!access_token){
            const currentRT = req.cookies.refresh_token;
            if(!currentRT) return res.status(401).json({
                code: "UNAUTHORIZED ACCESS",
                message: "You're trying to access unauthorized ressouces"
            })
    
            const decoded = jwt.verify(access_token, process.env.APPLICATION_SECRET_KEY);
    
            req.body = {
                token: refreshAccessToken(decoded)
            };
            
            next()
        }else{
            console.log("I'm there")
            const decoded = jwt.verify(access_token, process.env.APPLICATION_SECRET_KEY) 
            req.body = {
                token: access_token
            }
            next()
        }
    }catch(err){
        if(err.name == "JsonWebTokenError"){
            return res.status(401).json({
                code: "TOKEN EXPIRED",
                message: "Your token just expired, please log again"
            })
        }
    }
}

export { authMiddleware }