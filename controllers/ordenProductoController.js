import ordenProductoService from "../services/ordenProductoService.js";

const ordenProductoController = {
  createOrderProduct: async (req, res) => {
    try {
      const newOrderProduct = req.body;
      const orderProduct = await ordenProductoService.create(newOrderProduct);
      res.status(201).json(orderProduct);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllOrderProducts: async (req, res) => {
    try {
      const orderProducts = await ordenProductoService.getAll();
      res.status(200).json(orderProducts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getOrderProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const orderProduct = await ordenProductoService.getById(id);
      res.status(200).json(orderProduct);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateOrderProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const orderProduct = req.body;
      const updatedOrderProduct = await ordenProductoService.update(
        id,
        orderProduct
      );
      res.status(200).json(updatedOrderProduct);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteOrderProduct: async (req, res) => {
    try {
      const { id } = req.params;
      await ordenProductoService.delete(id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default ordenProductoController;
