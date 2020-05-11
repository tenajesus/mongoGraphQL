const mongoose = require('mongoose');

const profeSchema = new mongoose.Schema({
  nombre: String,
  antiguedad: Number,
  tipo: String,
  // Estableciendo la relacion
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
});

module.exports = mongoose.model('profes',profeSchema);  