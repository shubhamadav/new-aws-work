const mysql = require('mysql')
const express = require('express')
const bodyparser = require ('body-parser')

const encoder = bodyparser.urlencoded()

const app = express()


const connection = mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"toor",
     database:"nodejs"
});

connection.connect(function(error){
    if(error)throw error
    else console.log("connection");
});

app.get("/",function(req , res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", encoder,function(req , res){
    var emailid = req.body.emailid;
    var password = req.body.password;
    connection.query("select * from school where emailid = ? and password = ?" ,[emailid,password],function(error , result , fields){
         if(result.length > 0)
         {
            res.redirect("/expenses")
         }
         else{
            res.redirect("/")
         }
         res.end()
    })
})

app.get("/expenses",function(req , res){
     res.sendFile(__dirname + "/expenses.html");
})

app.listen(4500);