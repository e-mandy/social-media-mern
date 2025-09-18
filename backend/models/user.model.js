const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { default: isEmail } = require('validator/lib/isEmail')

const userSchema = mongoose.Schema({
    pseudo: {
        type: String,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        trim: true
    }?

    password: {
        type: String,
        required: true,
        max: 1024,
        minLength: 6
    },

    picture: {
        tyoe: String,
        default: "./uploads/profiles/randow-user.png"
    },

    bio: {
        type: String,
        max: 1024
    },

    followers: {
        type: [String]
    },

    following: {
        type: [String]
    },

    likes: {
        type: [String]
    }
}, 
{
    timestamps: true
}
)

//lancer la fonction avant d'enregistrer dans la BDD

userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel