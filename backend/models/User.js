const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  firstName:{
    type : String,
    required : true
  },
  lastName:{
    type : String,
    required : true
  },
  email:{
    type : String,
    required : true
  },
  password:{
    type : String,
    required : true
  }
})


let User = mongoose.model('User', userSchema);

module.exports = User;




