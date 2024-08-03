const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();

const app=express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

app.listen(port,()=>{
    console.log("app is running");
});