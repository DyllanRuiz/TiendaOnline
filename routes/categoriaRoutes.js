import { Router } from "express";
import categoriaController from "../controllers/categoriaController.js";

const categoriaRouter = Router();

categoriaRouter.post("/categorias/", categoriaController.createCategory);
categoriaRouter.get("/categorias/", categoriaController.getAllCategories);
categoriaRouter.get("/categorias/:id", categoriaController.getCategoryById);
categoriaRouter.put("/categorias/:id", categoriaController.updateCategory);
categoriaRouter.delete("/categorias/:id", categoriaController.deleteCategory);

export default categoriaRouter;