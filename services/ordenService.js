import ordenRepository from "../repositories/ordenRepository.js";

const ordenService = {
  create: async (newOrder) => {
    try {
      const order = await ordenRepository.create(newOrder);
      return order;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    try {
      const orders = await ordenRepository.getAll();
      return orders;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const order = await ordenRepository.getById(id);
      return order;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, order) => {
    try {
      const updatedOrder = await ordenRepository.update(id, order);
      return updatedOrder;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const order = await ordenRepository.delete(id);
      return order;
    } catch (error) {
      throw error;
    }
  },
};

export default ordenService;
