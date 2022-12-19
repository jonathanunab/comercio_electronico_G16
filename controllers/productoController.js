const Producto = require("../models/producto");

/*
// GET
exports.leerProducto = async (req, res) => {
    res.json({msg: "Ejecutó leer Producto"});
}

// POST
expors.crearProducto = async (req, res) => {
    res.json({msg: "Ejecutó crear Producto"}); 
}

// UPDATE
exports.actualizarProducto = async (req, res) => {
    res.json({msg: "Ejecutó actualizar Producto"});
}

// DELETE
exports.borrarProducto = async (req, res) => {
    res.json({msg: "Ejecutó borrar Producto"});
}

*/


// GET
exports.leerProducto = async (req, res) => {
    const {id} = req.params;
    const producto = await Producto.find().where("categoriaId").equals(id);
    res.json(producto);
}

// GET Producto Home

exports.leerProductoHome = async ( req, res ) => {
    try{
        const producto = await Producto.find();
        res.json({ producto });
    }catch(error){
        console.log(error);
    }
}

// POST
exports.crearProducto = async (req, res) => {
    //const {categoriaId} = req.body;
    //console.log(categoriaId);

    try{
        const producto = new Producto(req.body);

        producto.save();
        res.json(producto);

    }catch(error){
        console.log(error);
    }
}

// UPDATE
exports.actualizarProducto = async (req, res) => {

        const { id } = req.params;
        const producto = await Producto.findById(id);

        //No sé cómo adicionar el Id de la Categoría
        
        if(!producto){
            return res.status(400).json({msg: "Producto no encontrado"});
        }

        producto.nombre = req.body.nombre || producto.nombre;
        producto.descripcion = req.body.descripcion || producto.descripcion;
        producto.stock = req.body.stock || producto.stock;
        producto.precio = req.body.precio || producto.precio;
        producto.imagen = req.body.precio || producto.imagen;
        producto.save();
        res.json({ producto});

}

// DELETE
exports.borrarProducto = async (req, res) => {
    try{
        await Producto.deleteOne({_id: req.params.id});
        res.json({msg: "Producto eliminado"});

    }catch(error){
        console.log(error);
    }
}