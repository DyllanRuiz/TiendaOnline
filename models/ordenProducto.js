import { DataTypes } from "sequelize";
import database from "../config/database.js";

const OrdenProducto = database.define("OrdenProducto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
        },
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true,
        },
    },
});

export default OrdenProducto;