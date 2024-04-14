
exports.hello=(request,response)=>{
  return response.send("hello")
}

exports.createTasks = (request, response) => {
  const data = request.body;

  return response.status(201).json(data);
};

exports.listarTasksAll = (request, response) => {
  const taskList=task.findAll()
  return response.status(200).json(taskList);
};

exports.listarTasks = (request, response) => {
  const { id } = request.params;

  return response.status(200).json({ msg: `listando a tarefa ${id}` });
};

exports.atualizarTasks = (request, response) => {
  const { id } = request.params;

  return response.status(200).json({ msg: `atualizando a tarefa ${id}` });
};

exports.deletarTasks = (request, response) => {
  const { id } = request.params;

  return response.status(200).json({ msg: `deletando  a tarefa ${id}` });
};
