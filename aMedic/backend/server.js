
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();
const PORT = 3000;
const db_url = process.env.DATABASE_URL

mongoose.connect(db_url)
    .then(()=> console.log("mongodb connected"))
    .catch(err => console.error("mongodb conn error"))
 
const usersRoute = require('./routes/usersRoute')
app.use('/users', usersRoute);     //middleware for userRoute



app.get('/', (req, res)=>{
    res.send("backend");
});
app.listen(PORT, ()=>{
    console.log("Server is up");
    
})