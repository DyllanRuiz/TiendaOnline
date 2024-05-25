import categoriaService from "../services/categoriaService.js";

const categoriaController = {
    
        createCategory: async (req, res) => {
            try {
                const category = await categoriaService.createCategory(req.body);
                res.status(201).json(category);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },
    
        getAllCategories: async (req, res) => {
            try {
                const categories = await categoriaService.getAllCategories();
                res.status(200).json(categories);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },
    
        getCategoryById: async (req, res) => {
            try {
                const category = await categoriaService.getCategoryById(req.params.id);
                res.status(200).json(category);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },
    
        updateCategory: async (req, res) => {
            try {
                const updatedCategory = await categoriaService.updateCategory(req.params.id, req.body);
                res.status(200).json(updatedCategory);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },
    
        deleteCategory: async (req, res) => {
            try {
                const category = await categoriaService.deleteCategory(req.params.id);
                res.status(200).json(category);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },
    }

export default categoriaController;