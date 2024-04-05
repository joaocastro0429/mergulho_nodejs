
const express=require('express')
const AppHandler=require('./handler/app.handler')



const app=express()
require('./routes/app.route')(app)


app.use(express.json())

app.post("/task",AppHandler.createTasks)
app.get("/task",AppHandler.listarTasks)
app.get("/task/:id",AppHandler.listarTasksAll)
app.put("/task/:id",AppHandler.atualizarTasks)
app.delete("/task/:id",AppHandler.deletarTasks)


module.exports=app