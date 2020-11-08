"use strict";

var mongoose = require('mongoose'); //conectar a base de datos


mongoose.connect("mongodb://localhost/alumnos"); //mongoose.connect("mongodb://localhost/cursos");
// Esquema de la base de datos

var AlumnosSchema = {
  nombre: String,
  apellido: String,
  correo: String,
  fecha_nac: String,
  codigo: String,
  direccion: String,
  estado: String
};
var Alumnos = mongoose.model('alumnos', AlumnosSchema); //obtener todo

exports.obtenerTodo = function (req, res) {
  Alumnos.find(function (error, alumnos) {
    res.send(alumnos);
  });
}; //obtener por id


exports.obtenerPorId = function (req, res) {
  Alumnos.findOne({
    "_id": req.params.id
  }, function (error, alumnos) {
    res.send(alumnos);
  });
}; //para agregar productos


exports.agregar = function (req, res) {
  var data = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo: req.body.correo,
    fecha_nac: req.body.fecha_nac,
    codigo: req.body.codigo,
    direccion: req.body.direccion,
    estado: req.body.estado
  };
  var alumno = new Alumnos(data);
  alumno.save(function (error, resultado) {
    if (error) {
      res.send("Hubo un error.");
    } else {
      res.send(resultado[0]);
    }
  });
}; // para editar


exports.editar = function (req, res) {
  var data = {
    nombre: req.body.nombre,
    apellido: req.body.anio,
    correo: req.body.uva,
    fecha_nac: req.body.region,
    codigo: req.body.pais,
    direccion: req.body.descripcion,
    estado: req.body.foto
  };
  Alumnos.update({
    "_id": req.params.id
  }, data, function () {
    res.send(data);
  });
}; // //para eliminar


exports.eliminar = function (req, res) {
  Alumnos.remove({
    "_id": req.params.id
  }, function (error) {
    if (error) {
      console.log(error);
    } else {
      res.send("true");
    }
  });
};