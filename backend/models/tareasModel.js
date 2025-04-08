const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema({
  texto: {
    type: String,
    required: [true, "Por favor teclea el texto de la tarea"] //Es true porque es obligatorio y se le pone un mensaje en caso de que no lo sea
  },
}, {
  timestamps: true //Para que se creen las fechas de creación y actualización automáticamente
});

module.exports = mongoose.model('Tarea', tareaSchema); //Tarea en letra capital y singular