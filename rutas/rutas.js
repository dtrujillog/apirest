var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//conectar a base de datos
mongoose.connect("mongodb://localhost/alumnos");



/** Esque para alumnos */
var AlumnosSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    fecha_nac: String,
    codigo: String,
    direccion: String,
    estado: String
});
var Alumnos = mongoose.model('alumnos', AlumnosSchema);

//obtener todo
exports.obtenerTodo = function (req, res) {
    Alumnos.find(function (error, alumnos) {
        res.send(alumnos);
    });
}
//obtener por id
exports.obtenerPorId = function (req, res) {
    Alumnos.findOne({
        "_id": req.params.id
    }, function (error, alumnos) {
        res.send(alumnos);
    });
}
//para agregar alumnos
exports.agregar = function (req, res) {
    var data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        fecha_nac: req.body.fecha_nac,
        codigo: req.body.codigo,
        direccion: req.body.direccion,
        estado: req.body.estado
    }
    var alumno = new Alumnos(data);
    alumno.save(function (error, resultado) {
        if (error) {
            res.send("Hubo un error.");
        } else {
            res.send(resultado[0]);
        }
    });
}

// para editar alumnos
exports.editar = function (req, res) {
    var data = {
        nombre: req.body.nombre,
        apellido: req.body.anio,
        correo: req.body.uva,
        fecha_nac: req.body.region,
        codigo: req.body.pais,
        direccion: req.body.descripcion,
        estado: req.body.foto
    }
    Alumnos.update({
        "_id": req.params.id
    }, data, function () {
        res.send(data);
    });
}

// //para eliminar alumnos
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
}


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
