import userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const register = async (req, res) => {
    const { pseudo, email, password } = req.body;

    try{
        const newUser = await userModel.create({
            pseudo: pseudo,
            email: email,
            password: password
        });

        return res.status(200).json(newUser)
    }catch(err){
        res.status(401).json(err.message)
    }
}

const login = async (req, res)=>{
    setTimeout(()=> {
        console.log('processing')
    }, 1000)
    const { email, password } = req.body;

    const targetUser = await userModel.findOne({ email: email })

    if(!targetUser) return res.status(401).json({ message: "Email or password invalid" })

    const passwordMatch = await bcrypt.compare(password, targetUser.password);

    if(!passwordMatch) return res.status(401).json({ message: "Invalid password"})

    const access_token = jwt.sign({ id: targetUser._id, email: targetUser.email }, process.env.APPLICATION_SECRET_KEY, { expiresIn: process.env.EXPIRING_DAY })
    
    const refresh_token = jwt.sign({ id: targetUser._id, email: targetUser.email }, process.env.APPLICATION_REFRESH_TOKEN, { expiresIn: '10min'})

    return res.status(200).cookie('refresh_token', refresh_token, { httpOnly: true, maxAge: 60 * 10 * 1000}).json({
        pseudo: targetUser.pseudo,
        email: targetUser.email,
        token: access_token
    })
}

const isLogged = async (req, res) => {
    
    const authUser = userModel.findOne({ email: decoded.email });

    return res.status(200).json({
        pseudo: user.pseudo,
        email: user.email
    })
}

export const refreshAccessToken = ({ id, email }) => {
    const new_AT = jwt.sign({ id: id, email: email }, process.env.APPLICATION_REFRESH_TOKEN, { expiresIn: process.env.EXPIRING_DAY })

    return new_AT;
}

export { register, login, isLogged, refreshAccessToken }