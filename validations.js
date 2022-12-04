const { body } = require("express-validator");

const loginValidation = [
  body("email").isEmail(),
  body("passwordHash").isLength({ min: 5 }),
];

const registrValidation = [
  body("email").isEmail(),
  body("passwordHash").isLength({ min: 5 }),
  body("fullName").isLength({ min: 3 }),
  body("avatarUrl").optional().isURL(),
];

module.exports = {
  loginValidation,
  registrValidation,
};
