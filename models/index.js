import Producto from "./producto.js";
import Categoria from "./categorias.js";
import Usuario from "./usuario.js";
import Orden from "./orden.js";
import OrdenProducto from "./ordenProducto.js";

// Relaciones

// usuario - orden
Usuario.hasMany(Orden, { foreignKey: "usuarioId" });
Orden.belongsTo(Usuario, { foreignKey: "usuarioId" });

// orden - ordenProducto
Orden.belongsToMany(Producto, { through: OrdenProducto });
Producto.belongsToMany(Orden, { through: OrdenProducto });

// producto - categoria
Producto.belongsTo(Categoria, { foreignKey: "categoriaId" });
Categoria.hasMany(Producto, { foreignKey: "categoriaId" });




export {
    Producto,
    Categoria,
    Usuario,
    Orden,
    OrdenProducto
};