// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "/public/temp");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// export const upload = multer({ storage: storage });


import multer from "multer";
import path from "path";
import fs from "fs";

// absolute path to /public/temp inside your project
const uploadDir = path.join(process.cwd(), "public", "temp");

// create folder if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});

export const upload = multer({ storage });

