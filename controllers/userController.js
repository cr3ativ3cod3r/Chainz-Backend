const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { findByIdAndUpdate, find } = require("../models/cyclesModel");

const createUser = asyncHandler(async(req,res) => {
    const {username,password} = req.body;
    const user = await userModel.findOne({username});
    if (!user){
        const pass = await bcrypt.hash(password,10);
        console.log(pass);
        const newuser = await userModel.create({
            username,
            password: pass,
        });
        const {_id} = newuser;
        const token = jwt.sign({username,_id},"hqgct56vsd'hu",{expiresIn: '7d'});
        res.send({token});
    }
    else
    {
        res.send('user exists');
    }
    
})

const loginUser = asyncHandler(async(req,res) => {
    const {username,password} = req.body;
    const user = await userModel.findOne({username});
    const passw = await bcrypt.compare(password,user.password);
    if (!user || !passw){
        res.json({message: 'user not found'});
    }
    else{
        const {_id} = user;
        const token = jwt.sign({username,_id},"hqgct56vsd'hu",{expiresIn: '5h'});
        res.send({token});
        }
    

})

const forgotpassword = asyncHandler(async(req,res) => {
    const max = 9999;
    const min = 1000;
    const { username } = req.body;
    const user = await find({ username: username });
    const gen_otp = await Math.floor((Math.random()*(max-min))+min+1);
    await findByIdAndUpdate(
        user.id,
        {
            $set: {
                otp: gen_otp,
                createdtime: new Date(),
            }
        }
    )

})

const passwordcheck = asyncHandler(async(req,res) => {
    const rec_otp = req.body.otp;
    const username = req.body.username;
    const new_password = req.body.password;
    const user = await userModel.find({username});
    const delay = (user.createdtime-new Date())/60000;
    if (rec_otp === user.otp && delay <= 5){
        await findByIdAndUpdate(
            user.id,
            {
                $set: {
                    otp: null,
                    createdtime: null,
                    password: new_password,
                }
            }
        )
    }

})

const resetpassword = asyncHandler(async(req,res) => {
    const { username,oldpassword,newpassword } = req.body;
    user = await userModel.findOne({username});
    const old = bcrypt.hash(oldpassword,10);
    if (bcrypt.compare(old,user.password)){
        await userModel.findByIdAndUpdate(
            user.id,
            {
                $set:{
                    password: newpassword,
                }
            }
        )
    }
    else{
        res.send('Invalid old password');
    }
})

module.exports = { createUser,loginUser,forgotpassword,resetpassword,passwordcheck };