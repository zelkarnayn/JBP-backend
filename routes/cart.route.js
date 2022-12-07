const { Router } = require("express");
const { cartController } = require("../controllers/cart.controller")

const router = Router();

// Get full cart
router.get("/cart", cartController.getFullCart);

// Add item to the cart
router.post("/cart", cartController.addCartItem);

// Delete item from cart
router.delete("/cart/:itemId", cartController.deleteCartItem);

module.exports = router;
