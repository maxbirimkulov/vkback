import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    image: String,
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    isActivated: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true
})

export default mongoose.model('users', usersSchema)