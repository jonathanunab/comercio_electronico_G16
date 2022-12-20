const Producto = require('../models/producto');
const Categoria = require('../models/categoria');

exports.leerProductoHome = async ( req, res ) => {
    try{
        const producto1 = await Producto.find();
        res.json({ producto1 });
    }catch(error){
        console.log(error);
    }
}

// Se retornan los productos de la categoria asociada
exports.leerProducto = async (req, res) => {
    try {

        const { id } = req.params;

        const categoria = await Categoria.findById(id);

        if (!categoria) {
            return res.status(400).json({msg: "Categoria no encontrada"});
        }

        const productos = await Producto.find().where("categoriaId").equals(id);
        
        res.json({productos});

    } catch (error) {
        console.log(error);
    }
};

exports.leerProducto_para_actualizar = async (req, res) => {

	try {

        const { id } = req.params;

        const producto = await Producto.findById(id);

        if (!producto) {
            return res.status(400).json({msg: "Producto no encontrado"});
        }
        
        res.json({producto});

    } catch (error) {
        console.log(error);
    }
};

exports.crearProducto = async (req, res) => {
    
    try {


        const categoria = await Categoria.findById(req.body.categoriaId);

        if (!categoria) {
            return res.status(400).json({msg: "Categoria no encontrada"});
        }
        
        const producto = new Producto(req.body);

        producto.save();

        res.json(producto);

    } catch (error) {
        console.log(error);
    }

};

exports.actualizarProducto = async (req, res) => {
    
    try {

        // Se busca primero si el producto se encuentra en la BD
        const { id } = req.params;

        const producto = await Producto.findById(id);

        if (!producto) {
            return res.status(400).json({msg: "Producto no encontrado"});
        }

        // Se busca luego si el usuario tiene permitida esta acción para actualizar producto
        const categoria = await Categoria.findById(producto.categoriaId);

        if (!categoria) {
            return res.status(400).json({msg: "Categoria no encontrada"});
        }
        
        if ( categoria.creador.toString() !== req.usuario.id.toString() ) {
            return res.status(400).json({msg: "Acción no valida para este usuario"});
        }

        // Se actualizan los parámetros
        producto.nombre = req.body.nombre || producto.nombre;
        producto.descripcion = req.body.descripcion || producto.descripcion;
        producto.stock = req.body.stock || producto.stock;
        producto.precio = req.body.precio || producto.precio;
        producto.imagen = req.body.imagen || producto.imagen;
        
        producto.save()
        res.json({producto});

    } catch (error) {
        console.log(error);
    }

};

exports.borrarProducto = async (req, res) => {
    try {
        
        // Se busca primero si el producto se encuentra en la BD
        const { id } = req.params;

        const producto = await Producto.findById(id);

        if (!producto) {
            return res.status(400).json({msg: "Producto no encontrado"});
        }

        // Se busca luego si el usuario tiene permitida esta acción para actualizar producto
        const categoria = await Categoria.findById(producto.categoriaId);

        if (!categoria) {
            return res.status(400).json({msg: "Categoria no encontrada"});
        }
        
        if ( categoria.creador.toString() !== req.usuario.id.toString() ) {
            return res.status(400).json({msg: "Acción no valida para este usuario"});
        }

        const producto_delete = await Producto.deleteOne({_id: id});

        if(producto_delete.acknowledged !== true && producto_delete.deletedCount === 0){
            return res.status(400).json({msg: "No se pudo borrar el producto"});   
        }
        res.json({msg: "producto eliminado"});

        

    } catch (error) {
        console.log(error);
    }
};