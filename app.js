var express = require('express'),
    rutas = require("./rutas/rutas.js"),
    bodyParser = require('body-parser');

    
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Rutas
app.get('/alumnos', rutas.obtenerTodo);
app.get('/alumnos/:id', rutas.obtenerPorId);
app.post('/alumnos', rutas.agregar);
app.put('/alumnos/:id', rutas.editar);
app.delete('/alumnos/:id', rutas.eliminar);



app.listen(3000);
console.log('Escuchando en el puerto 3000');
