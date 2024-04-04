
require("dotenv").config()
const express = require('express')

const port=process.env.PORT || 3333
const app=express()



app.get("/",(request,response)=>{
    return  response.send("mergulho nodejs")
})


app.listen(port,()=>{
    console.log('running server')
})