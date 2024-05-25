import { Categoria } from '../models/index.js';

const categoriaRepository = {
    create: async (newCategory) => {
        try {
            const category = await Categoria.create(newCategory);
            return category;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
        try {
            const categories = await Categoria.findAll();
            return categories;
        } catch (error) {
            throw error;
        }
    },

    getById: async (id) => {
        try {
            const category = await Categoria.findByPk(id);
            return category;
        } catch (error) {
            throw error;
        }
    },

    update: async (id, category) => {
        try {
            const updatedCategory = await Categoria.update(category, {
                where: { id },
            });
            return updatedCategory;
        } catch (error) {
            throw error;
        }
    },

    delete: async (id) => {
        try {
            const category = await Categoria.destroy({
                where: { id },
            });
            return category;
        } catch (error) {
            throw error;
        }
    },
};

export default categoriaRepository;