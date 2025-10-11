import mongoose from 'mongoose'
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

module.exports = mongoose.model('User', userSchema);