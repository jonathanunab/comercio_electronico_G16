const express = require('express');

const app = express();

const PORT = 4000
app.listen( PORT, () =>{
    console.log(`Servidor está corriendo en el puerto ${PORT}`)
});