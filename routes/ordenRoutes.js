import { Router } from "express";
import ordenController from "../controllers/ordenController.js";

const ordenRouter = Router();

ordenRouter.post("/ordenes/", ordenController.createOrder);
ordenRouter.get("/ordenes/", ordenController.getAllOrders);
ordenRouter.get("/ordenes/:id", ordenController.getOrderById);
ordenRouter.put("/ordenes/:id", ordenController.updateOrder);
ordenRouter.delete("/ordenes/:id", ordenController.deleteOrder);

export default ordenRouter;