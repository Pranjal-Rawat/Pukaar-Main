const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors({
    origin:'*'
}));


app.get('/' , ( req,res) =>{ 
    res.send("Server Live Pukaar") ;
})


app.listen(3000, () => {
    console.log("Server Live Pukaar")
})