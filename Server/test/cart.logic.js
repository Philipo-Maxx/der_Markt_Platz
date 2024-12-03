import { cartInfo } from "../models/user/shop/cart.model";
import { productAdmin } from "../models/admin/Product";

const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || quantity <= 0) {
      return new Error();
    }

    const product = await productAdmin.findById(productId);
    if (!product) {
      return new Error();
    }

    let cart = await cartInfo.findOne({ userId });
    if (!cart) {
      cart = new cartInfo({ userId, items: [] });
    }

    const findItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (findItemIndex === -1) {
      cart.items.push(productId, quantity);
    } else {
      cart.items[findItemIndex].quantity += quantity;
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "Error" });
  }
};
