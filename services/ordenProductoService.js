import ordenProductoRepository from "../repositories/ordenProductoRepository.js";

const ordenProductoService = {
  create: async (newOrderProduct) => {
    try {
      const orderProduct = await ordenProductoRepository.create(
        newOrderProduct
      );
      return orderProduct;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    try {
      const orderProducts = await ordenProductoRepository.getAll();
      return orderProducts;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const orderProduct = await ordenProductoRepository.getById(id);
      return orderProduct;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, orderProduct) => {
    try {
      const updatedOrderProduct = await ordenProductoRepository.update(
        id,
        orderProduct
      );
      return updatedOrderProduct;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const orderProduct = await ordenProductoRepository.delete(id);
      return orderProduct;
    } catch (error) {
      throw error;
    }
  },
};

export default ordenProductoService;
