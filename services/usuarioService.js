import usuarioRepository from "../repositories/usuarioRepository.js";

const usuarioService = {

    createUser: async (newUser) => {
        try{
            const user = await usuarioRepository.create(newUser);
            return user;
        } catch (error) {
            throw error;
        }
    },

    getAllUsers: async () => {
      try {
        const users = await usuarioRepository.getAll();
        return users;
      } catch (error) {
        throw error;
      }
    },

    getUserById: async (id) => {
      try {
        const user = await usuarioRepository.getById(id);
        return user;
      } catch (error) {
        throw error;
      }
    },

    updateUser: async (id, user) => {
      try {
        const updatedUser = await usuarioRepository.update(id, user);
        return updatedUser;
      } catch (error) {
        throw error;
      }
    },

    deleteUser: async (id) => {
      try {
        const user = await usuarioRepository.delete(id);
        return user;
      } catch (error) {
        throw error;
      }
    },
}

export default usuarioService;