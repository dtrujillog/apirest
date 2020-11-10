var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//conectar a base de datos
mongoose.connect("mongodb://localhost/alumnos");

/** Esque para calificaciones */


var NotasSchema = new Schema({
    alumno: { type: Schema.ObjectId, ref: "alumnos" } ,
    curso: { type: Schema.ObjectId, ref: "cursos" } ,
    nota: Number
});
var Notas = mongoose.model('notas', NotasSchema);
//obtener todos los notas
exports.obtenernota = function (req, res) {
    Notas.find({}, function(err, notas) {
    // Notas.find(function (error, notas) {
        res.status(200).send(notas);
        // res.send(notas);
       
    });
}

//obtener por notas id
exports.obtenerPorIdnota = function (req, res) {
    Notas.findOne({
        "_id": req.params.id
    }, function (error, notas) {
        res.send(notas);
    });
}
//para agregar notas
exports.agregarnota = function (req, res) {
    var data = {
        alumno: req.body.alumno,
        curso: req.body.curso,
        nota: req.body.nota
    }
    var nota = new Notas(data);
    nota.save(function (error, resultado) {
        if (error) {
            res.send("Hubo un error.");
        } else {
            res.send(resultado[0]);
        }
    });
}

// para editar notas
exports.editarnota = function (req, res) {
    var data = {
        alumno: req.body.alumno,
        curso: req.body.curso,
        nota: req.body.nota
    }
    Notas.update({
        "_id": req.params.id
    }, data, function () {
        res.send(data);
    });
}

// //para eliminar notas
exports.eliminarnota = function (req, res) {
    Notas.remove({
        "_id": req.params.id
    }, function (error) {
        if (error) {
            console.log(error);
        } else {
            res.send("true");
        }
    });
}
