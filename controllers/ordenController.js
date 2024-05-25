import ordenService from "../services/ordenService.js";

const ordenController = {
  createOrder: async (req, res) => {
    try {
      const newOrder = req.body;
      const order = await ordenService.create(newOrder);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const orders = await ordenService.getAll();
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await ordenService.getById(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const { id } = req.params;
      const order = req.body;
      const updatedOrder = await ordenService.update(id, order);
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const { id } = req.params;
      await ordenService.delete(id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default ordenController;
