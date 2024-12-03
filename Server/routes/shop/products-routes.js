import { Router } from "express";
import {
  getFilteredProducts,
  getProductDetails,
} from "../../controllers/shop/products-controller.js";

const shopRouter = Router();

shopRouter.get("/get", getFilteredProducts);
shopRouter.get("/get/:id", getProductDetails);

export { shopRouter };
