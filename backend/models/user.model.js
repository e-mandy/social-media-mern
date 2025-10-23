import bcrypt from 'bcrypt'
import { Schema, mongoose } from 'mongoose'
import validator from 'validator'

const { isEmail } = validator;

const userSchema = new Schema({
    pseudo: {
        type: String,
        unique: true,
        required: [true, "Le pseudo est indispensable"],
        minLength: [3, "Le nombre de caractères est insuffisant"]
    },
    
    email: {
        type: String,
        required: [true, "Vous devez renseigné un email"],
        validate: [isEmail, "Email non valide"]
    },

    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    
    followers: [],

    followings: []
}, {
    timestamps: true
});

userSchema.pre('save', async function (next){
    try{
        const parsedSalt = parseInt(process.env.HASH_SALT_ROUND)
        const hashedPassword = await bcrypt.hash(this.password, parsedSalt);
        this.password = hashedPassword;

        next()
    }catch(err){
        console.log(err)
    }
});

const userModel = mongoose.model('User', userSchema);

export default userModel;