const express = require('express');
const conectarDB = require('./config/db');
const usuarioRouters = require('./routers/usuarioRouters');
const authRouters = require('./routers/authRouters');
const categoriaRouters = require('./routers/categoriaRouters');
const productoRouters = require('./routers/productoRouters');
const cors = require("cors");

// Conexión a la base datos
conectarDB();

const app = express();

// Habilitar express.json
app.use(express.json({ extended:true}));

//habilitar los cors
app.use(cors());

// Rutas API
app.use("/api/usuarios", usuarioRouters);
app.use("/api/auth", authRouters);
app.use("/api/categoria", categoriaRouters);
app.use("/api/producto", productoRouters);

const PORT = 4000
app.listen( PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});