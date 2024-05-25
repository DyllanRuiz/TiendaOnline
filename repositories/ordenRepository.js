import { Orden } from "../models/index.js";

const ordenRepository = {
  create: async (newOrder) => {
    try {
      const order = await Orden.create(newOrder);
      return order;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    try {
      const orders = await Orden.findAll();
      return orders;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const order = await Orden.findByPk(id);
      return order;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, order) => {
    try {
      const updatedOrder = await Orden.update(order, {
        where: { id },
      });
      return updatedOrder;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const order = await Orden.destroy({
        where: { id },
      });
      return order;
    } catch (error) {
      throw error;
    }
  },
};

export default ordenRepository;
