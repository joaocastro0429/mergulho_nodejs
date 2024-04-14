
require("dotenv").config()
const app = require('./app')
const express=require("express")
const port=process.env.PORT || 3333
app.use(express.json())

app.listen(port,()=>{
    console.log('running server')
})