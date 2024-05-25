import { Router } from "express";
import ordenProductoController from "../controllers/ordenProductoController.js";

const ordenProductoRouter = Router();

ordenProductoRouter.post("/ordenProductos/", ordenProductoController.createOrderProduct);
ordenProductoRouter.get("/ordenProductos/", ordenProductoController.getAllOrderProducts);
ordenProductoRouter.get("/ordenProductos/:id", ordenProductoController.getOrderProductById);
ordenProductoRouter.put("/ordenProductos/:id", ordenProductoController.updateOrderProduct);
ordenProductoRouter.delete("/ordenProductos/:id", ordenProductoController.deleteOrderProduct);

export default ordenProductoRouter;