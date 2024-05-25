import usuarioService from "../services/usuarioService.js";

const usuarioController = {

    createUser: async (req, res) => {
        try {
            const user = await usuarioService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await usuarioService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await usuarioService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const updatedUser = await usuarioService.updateUser(req.params.id, req.body);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await usuarioService.deleteUser(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

export default usuarioController;