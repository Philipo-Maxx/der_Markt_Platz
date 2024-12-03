import { Router } from "express";
import {
  addToCart,
  fetchCartItem,
  updateCartItem,
  deleteCartItem,
} from "../../controllers/shop/cart.controllers.js";

const cartRouter = Router();

cartRouter.post("/add", addToCart);
cartRouter.get("/get/:userId", fetchCartItem);
cartRouter.put("/update-cart", updateCartItem);
cartRouter.delete("/:userId/:productId", deleteCartItem);

export { cartRouter };
