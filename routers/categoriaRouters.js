const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const categoriaController = require("../controllers/categoriaController");

router.get("/", authMiddleware, categoriaController.leerCategoria);
// authMiddleware es para que no se puedan hacer si no están logeados

router.post("/", authMiddleware, categoriaController.crearCategoria);

router.put("/:id", authMiddleware, categoriaController.actualizarCategoria);

router.delete("/:id", authMiddleware, categoriaController.borrarCategoria);

module.exports = router;