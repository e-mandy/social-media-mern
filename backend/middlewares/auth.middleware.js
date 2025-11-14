import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token)
    
    try{
        const decoded = jwt.verify(token, process.env.APPLICATION_SECRET_KEY)
        console.log(decoded)
        next()
    }catch(err){
        res.status(401).json({
            code: "Unauthorized user"
        })
    }
}

export { authMiddleware }