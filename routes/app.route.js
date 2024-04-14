

module.exports = app => {
  const routes = require("express").Router();

  const AppHandle=require('../handler/app.handler')
  
  routes.get("/",AppHandle.hello );
  routes.post("/tasks",AppHandle.createTasks)
  routes.get("/tasks",AppHandle.listarTasksAll);
  routes.get("/tasks/:id", AppHandle.listarTasks);
  routes.put("/tasks/:id", AppHandle.atualizarTasks);
  routes.delete("/tasks/:id", AppHandle.deletarTasks);
  app.use(routes)
};
