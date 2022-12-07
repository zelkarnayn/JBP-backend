const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemSchema = new Schema(
  {
    productId: String,
    name: String,
    image: [String],
    quantity: {
      type: Number,
      default: 1,
    },
    price: Number
  },
  {
    timestamps: true,
  }
);

const CartItem = mongoose.model("CartItem", CartItemSchema);

module.exports = CartItem;
