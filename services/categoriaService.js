import categoriaRepository from "../repositories/categoriaRepositry.js";

const categoriaService = {
    createCategory: async (newCategory) => {
        try {
            const category = await categoriaRepository.create(newCategory);
            return category;
        } catch (error) {
            throw error;
        }
    },

    getAllCategories: async () => {
        try {
            const categories = await categoriaRepository.getAll();
            return categories;
        } catch (error) {
            throw error;
        }
    },

    getCategoryById: async (id) => {
        try {
            const category = await categoriaRepository.getById(id);
            return category;
        } catch (error) {
            throw error;
        }
    },

    updateCategory: async (id, category) => {
        try {
            const updatedCategory = await categoriaRepository.update(id, category);
            return updatedCategory;
        } catch (error) {
            throw error;
        }
    },

    deleteCategory: async (id) => {
        try {
            const category = await categoriaRepository.delete(id);
            return category;
        } catch (error) {
            throw error;
        }
    },
}

export default categoriaService;