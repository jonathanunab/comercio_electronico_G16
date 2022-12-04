const express = require("express");

const router = express.Router();

const usuarioController = require("../controllers/usuariosController");

/*router.get("/", (req, res) => {
    res.json({msg: "Desde router get"})
})

router.post("/", (req, res) => {
    res.json({msg: "Desde router post es crear"})
})

router.put("/", (req, res) => {
    res.json({msg: "Desde router put es actualizar"})
})

router.delete("/", (req, res) => {
    res.json({msg: "Desde router delete es borrar"})
})*/

router.post("/", usuarioController.crearUsuario);

module.exports = router;