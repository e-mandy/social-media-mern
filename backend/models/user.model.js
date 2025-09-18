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
        unique: true,
        validate: [isEmail],
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 6
    },

    picture: {
        type: String,
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

userSchema.statics.login = async function(email, password){
    const user = await this.findOne({ email });
    if(user){
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user;
        }
        throw Error('Incorrect password')
    }
    throw Error('Incorrect email')
}

const userModel = mongoose.model('User', userSchema)

module.exports = userModel