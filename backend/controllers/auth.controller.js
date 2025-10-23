import userModel from '../models/user.model.js'

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

export { register }