import { DataTypes } from "sequelize";
import database from "../config/database.js";

const Producto = database.define("producto", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "El nombre es requerido.",
            },
            len: {
                args: [3, 255],
                msg: "El nombre debe tener entre 3 y 255 caracteres.",
            }
        },
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "El precio es requerido.",
            },
            isDecimal: {
                msg: "El precio debe ser un número decimal.",
            },
            min: {
                args: [0],
                msg: "El precio debe ser mayor o igual a cero.",
            },
        },
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "El stock es requerido.",
            },
            isInt: {
                msg: "El stock debe ser un número entero.",
            },
            min: {
                args: [0],
                msg: "El stock debe ser mayor o igual a cero.",
            },
        },
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "La descripción es requerida.",
            },
            len: {
                args: [3, 1000],
                msg: "La descripción debe tener entre 3 y 1000 caracteres.",
            }
        },
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "La imagen es requerida.",
            },
            isUrl: {
                msg: "La imagen debe ser una URL válida.",
            },
        },
    },
});

export default Producto;