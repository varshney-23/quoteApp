const { text } = require('express');
const mongoose = require('mongoose');

let QuoteSchema = new mongoose.Schema({
  author :{
    type : String,
    requied : true,
    trim: true
  },
  text :{
    type : String,
    requied : true,
    trim: true
  },
})

let Quotes = mongoose.model('Quotes', QuoteSchema);

module.exports = Quotes;





