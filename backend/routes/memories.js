const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const profileImagePath = path.join(__dirname + "/../uploads/memories");

const multerStorageDetail = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, profileImagePath);
    },
    filename: (req, files, cb) => {
        const filename = files.originalname;
        cb(null, filename);
    },
});

const multerUpload = multer({
    storage: multerStorageDetail,
    fileFilter: (req, file, cb) => {
        if (
            !file.mimetype == "image/png" ||
            !file.mimetype == "image/jpeg" ||
            !file.mimetype == "image/jpg"
        ) {
            cb(null, false);
            return cb(new Error("File type not allowed"));
        }
        cb(null, true);
    },
});

//Upload new memory
router.post("/upload", multerUpload.single("file"), (req, res) => {
    console.log(req.body);
});

exports.memoryRoutes = router;
