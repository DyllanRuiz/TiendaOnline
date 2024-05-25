import productService from "../services/productService.js";

const productController = {

    createProduct: async (req, res) => {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await productService.getProductById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const updatedProduct = await productService.updateProduct(req.params.id, req.body);
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const product = await productService.deleteProduct(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

export default productController;