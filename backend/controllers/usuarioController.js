const Usuario = require('../models/usuario');

exports.crearUsuario = async (req, res) => {
    console.log(req.body);
    res.json({ msg: "desde controller post"});
};