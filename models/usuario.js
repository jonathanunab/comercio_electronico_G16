const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({
    nombre: {type: String, required: true, trim: true}, 
    /*Require es para hacerlos obligatorio, 
    Trim borra los espacios iniciales y finales*/
    email: {type: String, required: true, trim: true, unique: true},
    /* Unique es para hacer que el email sea único, 
    no admite dos veces el mismo correo*/
    password: {type: String, required: true, trim: true},
    registro: {type: Date, default: Date.now()},
});

//definir el modelo
module.exports = mongoose.model("Usuario", UsuariosSchema);