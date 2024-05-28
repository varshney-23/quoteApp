// const express = require('express');
// const router = express.Router(); OR -->

const router = require('express').Router();
const Quotes = require('../models/Quote');

router.get('/allQuotes' , async (req, res) => {
  try{
    let allQuotes = await Quotes.find();
    res.status(200).json(allQuotes);
  }
  catch(err){
    res.status(400).json({msg : "Wrongg!!"});
  }
})

router.post('/addquotes', async (req, res) =>{
  let {author, text} = req.body;
  Quotes.create({author, text});
  res.status(201).json({msg : "successfully created"});
})

router.get('/quotes/:id', async (req, res)=>{
  let {id} = req.params;
  const quote = await Quotes.findById(id);
  console.log(quote);
  res.status(200).json(quote);
})

router.post('/delete/:id', async (req, res)=>{
  let {id} = req.params;
  const quote = await Quotes.findByIdAndDelete(id);
  res.status(204).json({
    data : null
  })
})



module.exports = router;