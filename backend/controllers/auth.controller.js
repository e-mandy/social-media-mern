const userModel = require('../models/user.model')

const register = async (req, res) => {
    console.log(req.body)
    const {pseudo, email, password} = req.body;
    try{
        const user = await userModel.create({pseudo, email, password});
        res.status(200).json(user._id)
    }catch(error){
        res.status(400).json({ err: error })
    }
}

module.exports = { register }