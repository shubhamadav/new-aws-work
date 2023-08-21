const express = require('express')
const app = express();

app.get("/",(req , res)=>{
       res.sendFile(__dirname ,"/login.js")
});


app.listen(3000);