exports.createTasks=(request,response)=>{

    const data=request.body

    response.status(201).json({data})

}

exports.listarTasksAll=(request,response)=>{
    return response.status(200).json({msg:"listando uma tarefa"})
}

exports.listarTasks=(request,response)=>{
    const {id}=request.params

    return response.status(200).json({msg:`listando a tarefa ${id}`})

}

exports.atualizarTasks=(request,response)=>{
    const {id}=request.params

    return response.status(200).json({msg:`atualizando a tarefa ${id}`})

}

exports.deletarTasks=(request,response)=>{
    const {id}=request.params

    return response.status(200).json({msg:`deletando  a tarefa ${id}`})

}