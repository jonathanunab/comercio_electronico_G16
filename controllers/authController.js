const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path:"variables.env"});

exports.autenticarUsuario = async (req, res) => {
    
    const { password, email } = req.body;

    try {

        // Validación de existencia de usuario en la base de datos
        let usuario = await Usuario.findOne({email});

        if (!usuario) {
            return res.status(400).json({msg:"el usuario no existe"})
        }

        // Validar contraseña
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);

        if (!passwordCorrecto) {
            return res.status(404).json({msg:"password incorrecto"})
        }

        let payload = {
            usuario: {id: usuario.id}
        }
        //res.json(payload);

        // Si pasan las validaciones se genera un token
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: '30d',
            },
            (error, token) => {
                if(error) throw error;

                // confirmación token creado
                res.json({token});
            }
        );
        
    } catch (error) {
        console.log(error);
    }
};

exports.usuarioAutenticado = async( req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario});
    } catch (error) {
        return res.status(403).json({msg:"Error de autenticacion"});
    }
};