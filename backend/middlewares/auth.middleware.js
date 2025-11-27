import jwt from 'jsonwebtoken';
import { refreshAccessToken } from '../controllers/auth.controller';

const authMiddleware = (req, res, next) => {
    const access_token = req.headers.authorization;

    if(!access_token){
        const currentRT = req.cookies.refresh_token;
        if(!currentRT) return res.status(401).json({
            code: "UNAUTHORIZED ACCESS",
            message: "You're trying to access unauthorized ressouces"
        })

        const decoded = jwt.verify(currentRT, process.env.APPLICATION_REFRESH_TOKEN);
        
        res.json({
            token: refreshAccessToken(decoded)
        })
    }

    if(!jwt.verify(access_token, process.env.APPLICATION_SECRET_KEY)) return res.status(401).json({
        code: "UNAUTHORIZED ACCESS",
        message: "You're trying to access unauthorized ressouces"
    })

    next()
}

export { authMiddleware }