import jwt from 'jsonwebtoken';
import { refreshAccessToken } from '../controllers/auth.controller';

const authMiddleware = (req, res, next) => {
    // On récupère le refresh token dans le cookie du client
    const currentRT = req.cookies.refresh_token;
    const access_token = req.headers.authorization;

    if(!currentRT) return res.status(401).json({
        code: "TOKEN_EXPIRED",
        message: "Your session expired"
    });

    const decoded = jwt.verify(currentRT, process.env.APPLICATION_REFRESH_TOKEN);

    if(!decoded) return res.status(401).json({
        code: "UNKNOWN CONNECTION",
        message: "You're trying to access protected ressources. Who are you dummy ?"
    })
    
    const { _id, email } = userModel.findOne({ email: decoded.email });

    if(!access_token) res.json({
        token: refreshAccessToken({ _id, email })
    });

    next();
}

export { authMiddleware }