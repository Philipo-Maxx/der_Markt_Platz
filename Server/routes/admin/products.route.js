import express from "express";
import {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
} from "../../controllers/admin/product.controller..js";
import { upload } from "../../helpers/cloudinary/index.js";

const productRouter = express.Router();

productRouter.post(
  "/upload-image",
  upload.single("my_file"),
  handleImageUpload
);

productRouter.post("/add", addProduct);
productRouter.put("/edit/:id", editProduct);
productRouter.put("/delete/:id", deleteProduct);
productRouter.get("/get", fetchAllProducts);

export { productRouter };
