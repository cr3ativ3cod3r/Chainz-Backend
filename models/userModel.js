const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter username"],
        unique: [true,"Username should be unique"]
    },
    password: {
        type: String,
        required: [true,"Enter password"],
    },
    // email: {
    //     type: String,
    //     required: [true,"Enter a valid email id"]
    // },
    otp: {
        type: Number,
        default: null,
    },
    createdtime: {
        type: Date,
        default: null,
    }
})

module.exports = mongoose.model('user',userSchema);