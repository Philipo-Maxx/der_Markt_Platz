import { Router } from "express";

import { searchProducts } from "../../controllers/shop/search-controller.js";

const searchProductRouter = Router();

searchProductRouter.get("/:keyword", searchProducts);

export { searchProductRouter };
