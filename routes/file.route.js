const { Router } = require("express");
const { fileController } = require("../controllers/file.controller");
const router = Router();
const fileMiddleware = require("../file");

router.post("/posts", fileMiddleware.single("img"), fileController.addPost);

module.exports = router;
