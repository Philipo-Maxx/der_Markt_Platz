import { Router } from "express";

import {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} from "../../controllers/admin/order.controllr.js";

const adminOrderRouter = Router();

adminOrderRouter.get("/get", getAllOrdersOfAllUsers);
adminOrderRouter.get("/details/:id", getOrderDetailsForAdmin);
adminOrderRouter.put("/update/:id", updateOrderStatus);

export { adminOrderRouter };
