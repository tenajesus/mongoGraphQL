const mongoose = require('mongoose');

const profeSchema = new mongoose.Schema({
  name: String,
  antiguedad: Number,
  tipo: String
});

module.exports = mongoose.model('profes',profeSchema);