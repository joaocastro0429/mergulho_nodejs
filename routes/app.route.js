
module.exports= app=> {
  const routes = require("express").Router();

  routes.get("/", (request, response) => {
    return response.json({ msg: "mergurlho nodejs" });
  });

  routes.post("/task", (request, response) => {
    const data = request.body;

    response.status(201).json({ data });
  });

  routes.get("/task", (request, response) => {
    return response.status(200).json({ msg: "listando uma tarefa" });
  });
  routes.get("/task/:id", (request, response) => {
    const { id } = request.params;

    return response.status(200).json({ msg: `listando a tarefa ${id}` });
  });
  routes.put("/task/:id", (request, response) => {
    const { id } = request.params;

    return response.status(200).json({ msg: `atualizando a tarefa ${id}` });
  });

  routes.delete("/task/:id", (request, response) => {
    const { id } = request.params;

    return response.status(200).json({ msg: `deletando  a tarefa ${id}` });
  });


};
