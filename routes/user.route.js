const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const router = Router();
const { registrValidation, loginValidation } = require("../validations");
const validationResult = require("../utils/handleValidationserror");

router.post(
  "/registr",
  registrValidation,
  validationResult,
  userController.userRegistr
);
router.post(
  "/login",
  loginValidation,
  validationResult,
  userController.userLogin
);

module.exports = router;
