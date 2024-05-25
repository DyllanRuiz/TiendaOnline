import { DataTypes } from "sequelize";
import database from "../config/database.js";

const Categoria = database.define("categoria", {
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
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "La descripción es requerida.",
            },
        },
    },
});

export default Categoria;