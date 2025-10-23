import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const { Schema } = mongoose
import { isEmail } from 'validator'

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
    
    followers: [userSchema],

    followings: [userSchema]
}, {
    timestamps: true
});

userSchema.pre('save', async (next)=>{
    const hashedPassword = await bcrypt.hash(this.password, process.env.HASH_SALT_ROUND);
    this.password = hashedPassword;

    next()
});

module.exports = mongoose.model('User', userSchema);