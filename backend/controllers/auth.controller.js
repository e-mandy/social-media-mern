const register = (req, res) => {
    const { data } = req.body;

    try{
        res.status(200).json({
            raw: data
        })
    }catch(err){
        res.status(401).json(err)
    }
}

module.exports = { register };