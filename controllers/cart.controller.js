const CartItem = require("../models/CartItem.model");
const Phone = require("../models/Phone.model");

module.exports.cartController = {
    
  getFullCart: async (req, res) => {
    try {
      const cart = await CartItem.find();
      res.json(cart);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  addCartItem: async (req, res) => {
    const { productId, quantity } = req.body;

    try {
      const product = await Phone.findOne({ _id: productId });

      const image = product.image;
      const name = product.model;
      const price = product.price;

      const newItem = await CartItem.create({
        productId,
        quantity,
        image,
        name,
        price,
      });

      res.json(newItem);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  deleteCartItem: async (req, res) => {
    const itemId = req.params.itemId;
    try {
      const item = await CartItem.findByIdAndRemove(itemId);
      res.json(item);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
