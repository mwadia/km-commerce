const tinify = require('tinify');
require('dotenv').config();
const { join } = require('path');
const fs = require('fs');

tinify.key = process.env.TINIFY_KEY;

const reduceSize = (req, res, next) => {
  if (req.file) {
    const imgName = req.file.filename;
    //? to create the uploads folder if not exist
    const imgDir = join(__dirname, '..', 'uploads');
    !fs.existsSync(imgDir) && fs.mkdirSync(imgDir);
    const source = tinify.fromFile(join(__dirname, '..', 'uploads', imgName));
    source
      .toFile(join(__dirname, '..', 'uploads', imgName))
      .then((result) => {
        next();
      })
      .catch((err) => {
        res
          .status(500)
          .json({ msg: 'Connection Error,Could not compress img.' });
      });
  } else {
    next();
  }
};

module.exports = reduceSize;
