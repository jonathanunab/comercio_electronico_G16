/*
const usuario = require("../models/usuario");
const Usuario = require("../models/usuario");

exports.crearUsuario = async (req, res) => {
    console.log(req.body);
  //  res.json({ msg: "Desde controller post"})

};
*/

const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");

exports.crearUsuario = async ( req, res) => {

    //console.log(req.body);
    const { password, email } = req.body;    
    try{
        //Revisar que el correo sea único
        let usuario = await Usuario.findOne({email});

        if (usuario){
            return res.status(400).json({msg : "El usuario ya existe"});
        }

        //crear nuevo usuario
        usuario = new Usuario(req.body);

        //hash
        usuario.password = await bcryptjs.hash(password, 10);

        //Guardar usuario en la bd
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);

    }catch(error){
        console.log(error);
    }

};