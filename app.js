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
app.get('/cursos', rutas.obtenercursos);
app.get('/cursos/:id', rutas.obtenerPorIdcurso);
app.post('/cursos', rutas.agregarcurso);
app.put('/cursos/:id', rutas.editarcurso);
app.delete('/cursos/:id', rutas.eliminarcurso);

// Rutas de notas
app.get('/notas', rutas.obtenernota);
app.get('/notas/:id', rutas.obtenerPorIdnota);
app.post('/notas', rutas.agregarnota);
app.put('/notas/:id', rutas.editarnota);
app.delete('/notas/:id', rutas.eliminarnota);

// Rutas de notas con alumnos
// app.get('/notas', rutas.obtenernotas);

app.listen(3000);
console.log('Escuchando en el puerto 3000');
