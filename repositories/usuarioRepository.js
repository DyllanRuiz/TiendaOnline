import { Usuario } from '../models/index.js';

const usuarioRepository = {

    create: async (newUser) => {
        try{
            const user = await Usuario.create(newUser);
            return user;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
      try {
        const users = await Usuario.findAll();
        return users;
      } catch (error) {
        throw error;
      }
    },

    getById: async (id) => {
      try {
        const user = await Usuario.findByPk(id);
        return user;
      } catch (error) {
        throw error;
      }
    },

    update: async (id, user) => {
      try {
        const updatedUser = await Usuario.update(user, {
          where: { id },
        });
        return updatedUser;
      } catch (error) {
        throw error;
      }
    },

    delete: async (id) => {
      try {
        const user = await Usuario.destroy({
          where: { id },
        });
        return user;
      } catch (error) {
        throw error;
      }
    },

}

export default usuarioRepository;