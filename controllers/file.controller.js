const File = require("../models/File.model");

module.exports.fileController = {
  addPost: async (req, res) => {
    try {
      const file = await File.create({
        image: req.file.path,
        text: req.body.text,
        title: req.body.title,
      });
      return res.json(file);
    } catch (error) {
      res.json(`addPost: ${error.message}`);
    }
  },
};
