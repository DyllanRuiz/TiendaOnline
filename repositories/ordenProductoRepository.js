import { OrdenProducto } from "../models/index.js";

const ordenProductoRepository = {

    create: async (newOrderProduct) => {
        try {
            const orderProduct = await OrdenProducto.create(newOrderProduct);
            return orderProduct;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
        try {
            const orderProducts = await OrdenProducto.findAll();
            return orderProducts;
        } catch (error) {
            throw error;
        }
    },

    getById: async (id) => {
        try {
            const orderProduct = await OrdenProducto.findByPk(id);
            return orderProduct;
        } catch (error) {
            throw error;
        }
    },

    update: async (id, orderProduct) => {
        try {
            const updatedOrderProduct = await OrdenProducto.update(orderProduct, {
                where: { id },
            });
            return updatedOrderProduct;
        } catch (error) {
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const orderProduct = await OrdenProducto.destroy({
                where: { id },
            });
            return orderProduct;
        } catch (error) {
            throw error;
        }
    },
};

export default ordenProductoRepository;