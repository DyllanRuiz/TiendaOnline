 import { Producto } from "../models/index.js";

 const productRepository = {

    create: async (newProduct) => {
        try{
            const product = await Producto.create(newProduct);
            return product;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
      try {
        const products = await Producto.findAll();
        return products;
      } catch (error) {
        throw error;
      }
    },

    getById: async (id) => {
      try {
        const product = await Producto.findByPk(id);
        return product;
      } catch (error) {
        throw error;
      }
    },

    update: async (id, product) => {
      try {
        const updatedProduct = await Producto.update(product, {
          where: { id },
        });
        return updatedProduct;
      } catch (error) {
        throw error;
      }
    },

    delete: async (id) => {
      try {
        const product = await Producto.destroy({
          where: { id },
        });
        return product;
      } catch (error) {
        throw error;
      }
    },

 }

export default productRepository;