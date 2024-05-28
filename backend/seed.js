const mongoose = require('mongoose');

const Quotes = require('./models/Quote');



let dummy = [
  {
    author : "Ayushi",
    text : "duniya jaaye bhaad mei"
  },
  {
    author : "Pran",
    text : "School nahi jaana"
  },
  {
    author : "Mumma",
    text : "muje bhi ghumn hai"
  },
  {
    author : "Papa",
    text : "mne jo bola bss vahi hi sahi hai"
  },
]

async function seedDB(){
  await Quotes.deleteMany({});
  await Quotes.insertMany(dummy);
  console.log("DB seeded");
}

module.exports = seedDB;







