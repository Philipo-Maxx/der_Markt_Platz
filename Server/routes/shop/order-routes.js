import { Router } from "express";

import {
  getAllOrdersByUser,
  getOrderDetails,
  capturePayment,
} from "../../controllers/shop/order.controllr.js";

const orderRouter = Router();

//orderRouter.post("/create", createOrder);
orderRouter.post("/capture", capturePayment);
orderRouter.get("/list/:userId", getAllOrdersByUser);
orderRouter.get("/details/:id", getOrderDetails);

export { orderRouter };
