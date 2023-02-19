const express = require('express');
require('dotenv').config()
const{connection}=require("./configs/db")
const{UserRoute}=require("./routes/user.routes")
const{bookRoute}=require("./routes/lib.route")
const{authenticate}=require("./middleware/token")
const cors = require('cors');

const app=express()
app.use(cors())

app.use(express.json())

app.use("/user",UserRoute)
app.use(authenticate)
app.use("/library",bookRoute)


app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log("connected to DB BookManagement")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running at PORT 8080 ${process.env.PORT}`)
})