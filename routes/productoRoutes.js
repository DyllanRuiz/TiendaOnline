import { Router } from "express";
import productController from "../controllers/productoController.js";

const productRouter = Router();

productRouter.post("/productos/", productController.createProduct);
productRouter.get("/productos/", productController.getAllProducts);
productRouter.get("/productos/:id", productController.getProductById);
productRouter.put("/productos/:id", productController.updateProduct);
productRouter.delete("/productos/:id", productController.deleteProduct);

export default productRouter;