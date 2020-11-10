var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//conectar a base de datos
mongoose.connect("mongodb://localhost/alumnos");


/** Esquema para cursos */
var Schema = mongoose.Schema;
var Alumnos = mongoose.model("alumnos");
var CursosSchema = {
    curso: String,
    Semestre: String,
    Prerequisito: String,
    alumno:{ type: Schema.ObjectId, ref: "alumnos" }
}
var Cursos = mongoose.model('cursos', CursosSchema);

// obtener todos los curos
exports.obtenercursos = function (req, res) {
 
    Cursos.find(function (error, cursos) {
        res.send(cursos);
    });
}
//obtener por curso id
exports.obtenerPorIdcurso = function (req, res) {
    Cursos.findOne({
        "_id": req.params.id
    }, function (error, cursos) {
        res.send(cursos);
    });
}
//para agregar cursos
exports.agregarcurso = function (req, res) {
    var data = {
        curso: req.body.curso,
        Semestre: req.body.Semestre,
        Prerequisito: req.body.Prerequisito
    }
    var curso = new Cursos(data);
    curso.save(function (error, resultado) {
        if (error) {
            res.send("Hubo un error.");
        } else {
            res.send(resultado[0]);
        }
    });
}

// para editar cursos
exports.editarcurso = function (req, res) {
    var data = {
        curso: req.body.curso,
        Semestre: req.body.Semestre,
        Prerequisito: req.body.Prerequisito
    }
    Cursos.update({
        "_id": req.params.id
    }, data, function () {
        res.send(data);
    });
}

// //para eliminar cursos
exports.eliminarcurso = function (req, res) {
    Cursos.remove({
        "_id": req.params.id
    }, function (error) {
        if (error) {
            console.log(error);
        } else {
            res.send("true");
        }
    });
}
