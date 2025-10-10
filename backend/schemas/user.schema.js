import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
    pseudo: {
        type: String,
        unique: true,
        required: true
    },

})