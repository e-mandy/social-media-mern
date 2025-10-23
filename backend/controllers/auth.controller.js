import userModel from '../models/user.model'

const register = (req, res) => {
    const { pseudo, email, password } = req.body;

    try{
        const newUser = userModel.create({
            pseudo: pseudo,
            email: email,
            password: password
        });

        console.log(`New user: ${newUser}`)
    }catch(err){
        res.status(401).json(err)
    }
}

module.exports = { register };