import { DataTypes } from "sequelize";
import database from "../config/database.js";

const Usuario = database.define("usuario", {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: "El email ya se encuentra registrado.",
        },
        validate: {
            notEmpty: {
                msg: "El email es requerido.",
            },
            isEmail: {
                msg: "El email debe ser un correo electrónico válido.",
            },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "La contraseña es requerida.",
            },
            len: {
                args: [6, 255],
                msg: "La contraseña debe tener entre 6 y 255 caracteres.",
            },
        },
    },
});

export default Usuario;