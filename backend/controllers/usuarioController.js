const Usuario = require('../models/usuario');

exports.crearUsuario = async (req, res) => {
    //console.log(req.body);

    try {
        // Crear nuevo usuario
        let usuario = new Usuario(req.body);

        // Guardar usuario en la BD
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
        
    } catch (error) {
        console.log(error);
    }
};