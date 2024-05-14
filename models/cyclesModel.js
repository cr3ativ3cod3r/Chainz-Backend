const mongoose = require("mongoose");

const cycleschema = ({
    name:{
        type: String,
        required: [true,"This field is required"],
    },
    cycle_image: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null
    },
    company_name: {
        type: String,
        default: null,
    },
    cycle_weight: {
        type: Number,
        default: null,
    },
    cycle_height: {
        type: Number,
        default: null,
    },
    cycle_Body: {
        type: String,
        default: null,
    },
    tyre_radius: {
        type: Number,
        default: null,
    },
    tyre_width: {
        type: Number,
        default: null,
    },
    tyre_company: {
        type: String,
        default: null,
    },
    gear_number: {
        type: Number,
        default: null,
    },
    gear_company: {
        type: String,
        default: null,
    },
    shockers: {
        type: String,
        default: null,
    },
    breaktype: {
        type: String,
        default: null,
    },
    priceperday: {
        type: Number,
        required: [true,"This field is required"],
    },
    availability: {
        type: Boolean,
        default: true,
    },
    booked_time: {
        type: Date,
        default: null,
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        ref: "user",
    }


})

module.exports = mongoose.model("cycles",cycleschema);

//company name,cycle weight and height,body type,tyre details[radius,width,tyre company],gears[gear number,company],shockers,break,priceperday,stockcount,userid,time remaining