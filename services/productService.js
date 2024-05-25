import productRepository from "../repositories/productoRepository.js";

const productService = {
    
    createProduct: async (newProduct) => {
        try{
            const product = await productRepository.create(newProduct);
            return product;
        } catch (error) {
            throw error;
        }
    },

    getAllProducts: async () => {
        try {
            const products = await productRepository.getAll();
            return products;
        } catch (error) {
            throw error;
        }
    },

    getProductById: async (id) => {
        try {
            const product = await productRepository.getById(id);
            return product;
        } catch (error) {
            throw error;
        }
    },

    updateProduct: async (id, product) => {
        try {
            const updatedProduct = await productRepository.update(id, product);
            return updatedProduct;
        } catch (error) {
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            const product = await productRepository.delete(id);
            return product;
        } catch (error) {
            throw error;
        }
    },
}

export default productService;