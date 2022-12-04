const Producto = require ("../models/producto");
const Categoria = require ("../models/categoria");

exports.leerProducto = async ( req, res ) => {
    //res.json({ msg: "se ejecuto leer producto"});
    try {
        const producto = await Producto.find();
        res.json({ producto });
    } catch (error) {
        console.log(error);
    }
}

exports.crearProducto = async ( req, res ) => {
    //res.json({ msg: "se ejecuto crear producto"});
    const {categoriaId}= req.body;
    console.log(categoriaId);
    try {
        //const producto = new Producto(req.body);
        const categoriaencontrada = await Categoria.findById(categoriaId);

        if(!categoriaencontrada){
            return res.status(400).json({ msg: "ingrese una categoria valida"});
        }
        const producto = new Producto(req.body);
        await producto.save();

        res.json(producto);

    } catch (error) {
        console.log(error);
    }
}

exports.actualizarProducto = async ( req, res ) => {
    //res.json({ msg: "se ejecuto actualizar producto"});
    const { id } = req.params;

    const producto = await Producto.findById(id);

    if(!producto){
        return res.status(400).json({ msg: "producto no encontrado"});
    }

    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.descripcion;
    producto.stock = req.body.stock || producto.stock;
    producto.precio = req.body.precio || producto.precio;
    producto.categoriaId = req.categoria || producto.categoriaId;
    producto.save();
    res.json({ producto });

}

exports.borrarProducto = async ( req, res ) => {
    //res.json({ msg: "se ejecuto borrar producto"});
    try {
        await Producto.deleteOne({_id: req.params.id});
        res.json({ msg: "producto eliminado"});
    } catch (error) {
        console.log(error);
    }
}