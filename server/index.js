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

app.post('/contact',(req,res)=>{
    res.send("Done");
});


app.listen(3000, () => {
    console.log("Server Live Pukaar")
})

const URI = "mongodb+srv://pukaarsanstha:I60868V899LQREow@cluster0.pv61dno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI).then().catch((err)=>{});
