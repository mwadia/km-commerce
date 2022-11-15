const multer = require('multer');
const path = require('path');

const uploadFile = () => {

  const storage = multer.diskStorage({

    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({
    storage,
  });
  return upload;
};
module.exports = uploadFile;