const mongoose = require('mongoose');

const profeSchema = new mongoose.Schema({
  nombre: String,
  antiguedad: Number,
  tipo: String
});

module.exports = mongoose.model('profes',profeSchema);  