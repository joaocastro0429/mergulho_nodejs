
require("dotenv").config()
const express = require('express')

const port=process.env.PORT || 3333
const app=express()
 

app.use(express.json())
app.get("/",(request,response)=>{
    return  response.json({msg:"mergurlho nodejs"})
})

app.post("/task",(request,response)=>{

    const data=request.body

    response.status(201).json({data})

})

app.get("/task",(request,response)=>{
  return response.status(200).json({msg:"listando uma tarefa"})
})
app.get("/task/:id",(request,response)=>{
    const {id}=request.params

    return response.status(200).json({msg:`listando a tarefa ${id}`})

})
app.put("/task/:id",(request,response)=>{
    const {id}=request.params

    return response.status(200).json({msg:`atualizando a tarefa ${id}`})

})

app.delete("/task/:id",(request,response)=>{
    const {id}=request.params

    return response.status(200).json({msg:`deletando  a tarefa ${id}`})

})


app.listen(port,()=>{
    console.log('running server')
})