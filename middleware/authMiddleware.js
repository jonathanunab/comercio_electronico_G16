const jwt = require('jsonwebtoken')
require('dotenv').config({path:"variables.env"});

module.exports = function(req, res, next){
    // Leer token desde el header en postman
    const token = req.header('x-auth-token');
    //console.log(token);

    // Se verifica si hay token
    if (!token) {
        return res.status(401).json({msg:"No hay token"});
    }

    // Validación token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        return res.status(401).json({msg:"Token no valido"});
    }
};