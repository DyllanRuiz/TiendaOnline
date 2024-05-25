import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const usuarioRouter = Router();

usuarioRouter.post("/usuarios/", usuarioController.createUser);
usuarioRouter.get("/usuarios/", usuarioController.getAllUsers);
usuarioRouter.get("/usuarios/:id", usuarioController.getUserById);
usuarioRouter.put("/usuarios/:id", usuarioController.updateUser);
usuarioRouter.delete("/usuarios/:id", usuarioController.deleteUser);

export default usuarioRouter;