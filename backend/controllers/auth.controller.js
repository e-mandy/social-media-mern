import userModel from '../models/user.model'

const register = (req, res) => {
    const { pseudo, email, password } = req.body;

    try{
        //
    }catch(err){
        res.status(401).json(err)
    }
}

module.exports = { register };