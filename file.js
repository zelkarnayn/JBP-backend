const multer = require("multer");
const storage = multer.diskStorage({
  destination(req, file, cd) {
    cd(null, "files");
  },
  filename(req, file, cd) {
    cd(null, file.originalname);
  },
});

multer({
  limits: { fieldSize: 2 * 1024 * 1024 },
});

const types = ["image/png", "image/jpeg", "image/jpg", "image/heic"];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
module.exports = multer({ storage, fileFilter });