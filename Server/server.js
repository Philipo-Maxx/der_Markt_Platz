import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./config/auth/db.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import { authRoute } from "./routes/auth/auth.route.js";
import { productRouter } from "./routes/admin/products.route.js";
import { adminOrderRouter } from "./routes/admin/order-routes.js";

import { cartRouter } from "./routes/shop/cart-routes.js";
import { shopRouter } from "./routes/shop/products-routes.js";
import { reviewRouter } from "./routes/shop/review-routes.js";
import { searchProductRouter } from "./routes/shop/search-routes.js";
import { orderRouter } from "./routes/shop/order-routes.js";
import { addressRouter } from "./routes/shop/address-routes.js";

import { featureRouter } from "./routes/common/feature-routes.js";

const app = express();
const PORT = process.env.PORT_NUM || 5000;
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Authorization",
      "Content-Type",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

//Generic Routing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

//User Auth Route
app.use("/api/v1/auth", authRoute);

//Admin Product Route
app.use("/api/v1/admin/products", productRouter);
app.use("/api/v1/admin/orders", adminOrderRouter);

//User Route
app.use("/api/v1/shop/cart", cartRouter);
app.use("/api/v1/shop/products", shopRouter);
app.use("/api/v1/shop/address", addressRouter);
app.use("/api/v1/shop/search", searchProductRouter);
app.use("/api/v1/shop/order", orderRouter);
app.use("/ap1/v1/shop/review", reviewRouter);

//common route
app.use("/api/v1/common/feature", featureRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
