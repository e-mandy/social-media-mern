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
        minLength: 8,
    },

    createdAt: {
        type: Date
    },

    updateAt: {
        type: Date
    },

    followers: [userSchema],

    followings: [userSchema]
});
