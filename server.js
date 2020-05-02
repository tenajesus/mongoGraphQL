const express = require('express');
const moongose = require('mongoose');

// mongoose conection
moongose.connect('mongodb://localhost/docentesdb', { useNewUrlParser: true, useUnifiedTopology: true });
// express server
const app = express();

app.listen(8080, function () {
    console.log('Servidor Iniciado')
});