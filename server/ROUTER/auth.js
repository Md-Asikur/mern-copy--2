const express = require('express');
const Router = express.Router();
const User=require('../MODEL/userSchema')
Router.get('/', (req, res) => {
    res.send("Hello i am from Router")
})
Router.post('/register', async(req, res) => {
   /* console.log(req.body)
    res.json({message:req.body})
    //res.send('mere page')*/ //test for postman
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({error:"plese fill all the fields"})
    }
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
             return res.status(423).json({error:"Email is Alreay Exist"})
        } else if (password!=cpassword) {
             return res.status(424).json({error:"Password is not march"})
        } else {
            const user = new User({ email, password, cpassword, name, phone })
            await user.save()
            res.status(201).json({message:"Register Successfully"})
        }
        
    } catch(err){
        console.log(err)
    }
})
module.exports = Router;