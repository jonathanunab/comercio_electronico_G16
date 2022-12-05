const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");

router.post(
    "/", 
    usuarioController.crearUsuario
);

/*
router.get("/", (req, res) => {
        res.json({msg: "desde router get"})
});

router.post("/", (req, res) => {
    res.json({msg: "desde router post es crear"})
});

router.put("/", (req, res) => {
    res.json({msg: "desde router put es Actualizar"})
});

router.delete("/", (req, res) => {
    res.json({msg: "desde router Delete es Borrar"})
});

*/

module.exports = router;