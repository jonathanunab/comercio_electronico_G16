const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

exports.crearUsuario = async (req, res) => {
    //console.log(req.body);
    const { password, email } = req.body;

    try {

        // Validación de existencia de usuario en la base de datos
        let usuario = await Usuario.findOne({email});

        if (usuario) {
            return res.status(400).json({msg:"el usuario ya existe"})
        }

        // Crear nuevo usuario
        usuario = new Usuario(req.body);

        // encriptacion
        usuario.password = await bcryptjs.hash(password, 10);

        // Guardar usuario en la BD
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
        
    } catch (error) {
        console.log(error);
    }
};