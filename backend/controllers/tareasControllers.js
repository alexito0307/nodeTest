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

const updateTarea = asyncHandler(async (req, res) => {
  const tarea = await Tarea.findById(req.params.id);
  if(!tarea) {
    res.status(400);
    throw new Error("Tarea no encontrada");
  }
  const tareaNueva = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(tareaNueva);
});


const deleteTarea = asyncHandler( async(req,res) => {
  const tarea = await Tarea.findById(req.params.id);
  if(!tarea) {
    res.status(400);
    throw new Error("Tarea no encontrada");
  }
  await tarea.deleteOne();
  res.status(200).json({"id": req.params.id});
})
module.exports = {
  getTarea,
  createTarea,
  updateTarea,
  deleteTarea
}