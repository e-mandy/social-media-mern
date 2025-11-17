import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.cookies.connexion_token
    
    try{
        const decoded = jwt.verify(token, process.env.APPLICATION_SECRET_KEY)

        if(!decoded) return res.status(401).json({ code: "UNAUTHORIZED USER" })
        
        next()
    }catch(err){
        res.status(401).json({
            code: "Unauthorized user"
        })
    }
}

export { authMiddleware }