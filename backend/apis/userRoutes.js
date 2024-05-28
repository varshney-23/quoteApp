const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res)=>{
  let user = req.body;
  console.log(user);
  const email = await User.findOne({ email : user.email });
  if(email){
    alert('Email already exists!!');
  } else {
    user.password = await bcrypt.hash(user.password, 10);
    let newUser = new User({
      firstName : user.firstName,
      lastName : user.lastName,
      email : user.email,
      password : user.password
    })
    await newUser.save();
    res.status(200).json("Registered Successfully");
  }
})

router.post('/login' , async (req, res) =>{
  let user = req.body;
})



module.exports = router;