const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

module.exports.userController = {
  userRegistr: async (req, res) => {
    try {
      const password = req.body.passwordHash;
      const salt = await bcrypt.genSalt(Number(process.env.HASH_RAUNDS));
      const hash = await bcrypt.hash(password, salt);

      const doc = new User({
        email: req.body.email,
        fullName: req.body.fullName,
        avatarUrl: req.body.avatarUrl,
        passwordHash: hash,
      });

      const user = await doc.save();

      const token = jwt.sign(
        {
          _id: user._id,
        },
        "secret123",
        {
          expiresIn: "30d",
        }
      );

      const { passwordHash, ...userData } = user._doc;

      res.json({
        ...userData,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Не удалось зарегистрироваться",
      });
    }
  },

  userLogin: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(404).json({
          message: "Пользователь не найден",
        });
      }

      const isValidPass = await bcrypt.compare(
        req.body.passwordHash,
        user._doc.passwordHash
      );
      if (!isValidPass) {
        return res.status(404).json({
          message: "Не верный Логин или пароль",
        });
      }

      const token = jwt.sign(
        {
          _id: user._id,
        },
        "secret123",
        {
          expiresIn: "30d",
        }
      );

      const { passwordHash, ...userData } = user._doc;
      res.json({
        ...userData,
        token,
      });
    } catch (error) {
      res.status(500).json({
        message: "Не удалось авторизоваться",
      });
    }
  },
};
