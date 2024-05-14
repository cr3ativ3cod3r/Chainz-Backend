const mongoose = require("mongoose");
const user = require("./userModel");

const historyschema = ({
    cycle_name: {
        type: String,
    },
    Date : {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
})

module.exports = mongoose.model("history",historyschema);