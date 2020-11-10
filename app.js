var express = require('express'),
    rutas = require("./rutas/rutas.js");
    bodyParser = require('body-parser');
 
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Rutas de los alumnos
app.get('/alumnos', rutas.obtenerTodo);
app.get('/alumnos/:id', rutas.obtenerPorId);
app.post('/alumnos', rutas.agregar);
app.put('/alumnos/:id', rutas.editar);
app.delete('/alumnos/:id', rutas.eliminar);


// Rutas de los cursos
var express = require('express'),
    ruta2 = require("./rutas/ruta2.js");
   


app.get('/cursos', ruta2.obtenercursos);
app.get('/cursos/:id', ruta2.obtenerPorIdcurso);
app.post('/cursos', ruta2.agregarcurso);
app.put('/cursos/:id', ruta2.editarcurso);
app.delete('/cursos/:id', ruta2.eliminarcurso);

// Rutas de notas


// Rutas de los cursos
var express = require('express'),
    ruta3 = require("./rutas/ruta3.js");
   
app.get('/notas', ruta3.obtenernota);
app.get('/notas/:id', ruta3.obtenerPorIdnota);
app.post('/notas', ruta3.agregarnota);
app.put('/notas/:id', ruta3.editarnota);
app.delete('/notas/:id', ruta3.eliminarnota);

// Rutas de notas con alumnos
// app.get('/notas', rutas.obtenernotas);

app.listen(3000);
console.log('Escuchando en el puerto 3000');
