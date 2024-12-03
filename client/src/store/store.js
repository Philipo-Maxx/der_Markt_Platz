import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/index.js";
import adminProductsSlice from "./admin/product-slice/index.js";
import adminOrderSlice from "./admin/order-slice";

import shopProductsSlice from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice";
import shopAddressSlice from "./shop/address-slice";
import shopSearchSlice from "./shop/search-slice";
import shopReviewSlice from "./shop/review-slice";
import shopOrderSlice from "./shop/order-slice";

import commonFeatureSlice from "./common-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,

    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts: shopProductsSlice,
    shopAddress: shopAddressSlice,
    shopCart: shopCartSlice,
    shopSearch: shopSearchSlice,
    shopReview: shopReviewSlice,
    shopOrder: shopOrderSlice,

    commonFeature: commonFeatureSlice,
  },
});

export default store;
