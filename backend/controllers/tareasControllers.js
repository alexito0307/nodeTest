const asyncHandler = require("express-async-handler");
const Tarea = require("../models/tareasModel"); //Importamos el modelo de tareas

const getTarea = asyncHandler( async(req,res) => {
  const tareas = await Tarea.find();
  res.status(200).json({tareas});
})
const createTarea = asyncHandler( async(req,res) => {
  if(!req.body.texto) {
    res.status(400);
    throw new Error("Por favor teclea el texto de la tarea"); //Si no hay texto, se lanza un error
  }
  const tarea = await Tarea.create({
    texto: req.body.texto //El texto de la tarea se obtiene del body de la petición
  })
  res.status(200).json({mensaje: tarea}); //Se devuelve la tarea creada
})

const updateTarea = asyncHandler (async(req,res) => {
  res.send("Actualizar Tareaaaaaa");
})
const deleteTarea = asyncHandler( async(req,res) => {
  res.send("Eliminar Tareaaaaaa");
})
module.exports = {
  getTarea,
  createTarea,
  updateTarea,
  deleteTarea
}