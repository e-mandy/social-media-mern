import userModel from '../models/user.model.js'
import { bcrypt } from 'bcrypt'
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
    const { email, password } = req.body;

    const targetUser = await userModel.findOne({ email: email })

    if(!targetUser) return res.status('401').json({ message: "Email or password invalid" })

    const passwordMatch = await bcrypt.compare(password, targetUser.password);

    if(!passwordMatch) return res.status(401).json({ message: "Invalid password"})

    const token = jwt.sign({ userId: targetUser._id, email: targetUser.email }, process.env.APPLICATION_SECRET_KEY, { expiresIn: process.env.EXPIRING_DAY })

    return res.status(200).cookie('connexion_token', token, { httpOnly: true, maxAge: 60 * 10 * 1000})
}

export { register }