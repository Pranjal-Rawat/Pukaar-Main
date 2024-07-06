const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors({
    origin:'*'
}));


app.listen('/ ', () => {
    console.log("Server Live Pukaar")
})