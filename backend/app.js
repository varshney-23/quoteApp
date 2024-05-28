const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDb = require('./seed');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1/quotes').then(()=>{
  console.log('Database Connection done');
}).catch((err)=>{
  console.log('something wrong');
  console.log(err);
})

const quoteRoutes = require('./apis/quoteRoutes');
const userRoutes = require('./apis/userRoutes');


app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors({origin: ['http://localhost:5173']}));

app.use(quoteRoutes);
app.use(userRoutes);

app.get('/hello' , (req, res) =>{
  res.status(200).json({msg : "Hello from quotesApp"});
})


seedDb();



const PORT = 8080;
app.listen(PORT , () =>{
  console.log(`Server Connected at ${PORT}`);
})
// const PORT = process.env.PORT || 8080 --> iske liye backend folder mei create .env file inside that give port number, then require that file in app.js file, iise --> secret key rheta..