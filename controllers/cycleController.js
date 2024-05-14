const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const cycles = require("../models/cyclesModel");
const history = require("../models/historyModel");

const getcycles = asyncHandler(async(req,res) => {
    const cycle_list = await cycles.find({availability: true});
    res.json({cycle_list}); 
})

const bookcycle = asyncHandler(async(req,res) => {
    const cycle = await cycles.findById(req.params.id);
    await cycles.findByIdAndUpdate(req.params.id,
        {$set : 
            {
            availability: false,
            booked_time: new Date(),
            user: req.user
            }
        }
    )
    await history.create({
        cycle_name: cycle.cycle_name,
        user: req.user,
    });
    res.send("done");
})

const inventory = asyncHandler(async(req,res) => {
    const my_cycles = await cycles.find({user: req.user});
    res.json({my_cycles});
})

const detailview = asyncHandler(async(req,res) => {
    const choosen = await cycles.findById(req.params.id);
    res.json({choosen});
})

const addcycle = asyncHandler(async(req,res) => {
    const { name,cycle_image,description,company_name,cycle_weight,cycle_height,cycle_Body,tyre_radius,tyre_width,tyre_company,gear_number,gear_company,shockers,breaktype,priceperday } = req.body;
    await cycles.create({
        name,
        cycle_image,
        description,
        company_name,
        cycle_weight,
        cycle_height,
        cycle_Body,
        tyre_radius,
        tyre_width,
        tyre_company,
        gear_number,
        gear_company,
        shockers,
        breaktype,
        priceperday

    });
    res.send("cycle added");
})

const returncycle = asyncHandler(async(req,res) => {
    await cycles.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                availability: true,
                booked_time: null,
                user: null,
            }
        }
    )
    res.send("returned");
})

const rentalhistory = asyncHandler(async(req,res) => {
    hist = await history.find({user: req.user});
    res.json({hist});
})

module.exports = { getcycles,bookcycle,inventory,detailview,addcycle,returncycle,rentalhistory }; 

//rentalhistory